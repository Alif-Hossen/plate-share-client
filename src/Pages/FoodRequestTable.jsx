


import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const FoodRequestTable = ({ foodId, foodStatus }) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "https://plate-share-server.onrender.com";

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/v1/requests/${foodId}`);
            const data = await res.json();
            if (res.ok) {
                const sortedRequests = data.sort((a, b) => {
                    if (a.status === 'Pending' && b.status !== 'Pending') return -1;
                    if (a.status !== 'Pending' && b.status === 'Pending') return 1;
                    return 0;
                });
                setRequests(sortedRequests);
            } else {
                toast.error(data.message || "Failed to fetch requests");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error fetching requests");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchRequests();
    }, [foodId]);

    const handleStatusUpdate = async (requestId, newStatus) => {
        if (foodStatus !== 'Available' && newStatus === 'Accepted') {
            toast.error("Food status is not 'Available'. Cannot accept requests.");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/v1/requests/${requestId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus, foodId: foodId }), 
            });
            
            const data = await res.json();
            
            if (res.ok && data.success) {
                toast.success(`Request ${newStatus === 'Accepted' ? 'Accepted' : 'Rejected'}!`);

                if (newStatus === 'Accepted') {
                     // The full page reload/re-fetch of CardDetails data would handle the main food status change, 
                     // but for a quicker fix, we can just re-fetch the requests.
                }

                fetchRequests(); 
            } else {
                toast.error(data.message || `Failed to update status to ${newStatus}`);
            }

        } catch (err) {
            console.error(err);
            toast.error('Error updating status.');
        }
    };

    if (loading) return <p className="text-center py-4">Loading requests...</p>;

    const isAlreadyDonated = foodStatus === 'Donated';

    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Food Requests ({requests.length})</h3>
            {isAlreadyDonated && <p className="text-red-500 font-semibold mb-4">Note: This food has already been marked as Donated.</p>}

            {requests.length === 0 ? (
                <p className="text-center text-gray-500">No pending requests for this food.</p>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full table-auto divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase">Requester</th>
                                <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase">Location / Contact</th>
                                <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase">Reason</th>
                                <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {requests.map(req => (
                                <tr key={req._id} className="text-center">
                                    <td className="px-3 py-4 text-sm font-medium text-gray-900">
                                        {req.requesterName} <br/> <span className="text-xs text-blue-600">{req.requesterEmail}</span>
                                    </td>
                                    <td className="px-3 py-4 text-sm text-gray-500">
                                        {req.writeLocation} <br/> <span className="text-xs font-semibold">{req.contactNo}</span>
                                    </td>
                                    <td className="px-3 py-4 text-sm text-gray-500 max-w-xs overflow-hidden truncate">{req.whyNeedFood}</td>
                                    <td className={`px-3 py-4 text-sm font-bold ${req.status === 'Accepted' ? 'text-green-600' : req.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                                        {req.status}
                                    </td>
                                    <td className="px-3 py-4">
                                        <div className="space-y-1 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center items-center">
                                            {req.status === 'Pending' && !isAlreadyDonated ? (
                                                <>
                                                    <button onClick={() => handleStatusUpdate(req._id, 'Accepted')}
                                                            className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition duration-150 w-full md:w-auto text-center">
                                                        Accept
                                                    </button>
                                                    <button onClick={() => handleStatusUpdate(req._id, 'Rejected')}
                                                            className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition duration-150 w-full md:w-auto text-center">
                                                        Reject
                                                    </button>
                                                </>
                                            ) : (
                                                <p className="text-sm text-gray-500">{isAlreadyDonated ? 'Donated' : 'Action Taken'}</p>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FoodRequestTable;