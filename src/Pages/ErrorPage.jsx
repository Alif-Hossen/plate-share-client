
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6">
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-6 p-6 md:p-12">

        <div className="flex items-center justify-center p-4">
          <picture>
            <source
              srcSet="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
              type="image/gif"
            />
            <img
              src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
              alt="Cute robot lost in space — 404 illustration"
              className="max-w-full h-auto rounded-2xl shadow-lg"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center p-2 md:pl-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full text-sm">404</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">Page not found</h1>
          </div>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Oops — the page you're looking for doesn't exist or has moved. Don't worry, our little robot is on it.
            Try going back to the home page or check the URL for typos.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow hover:shadow-lg transform hover:-translate-y-0.5 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 1.707a1 1 0 00-1.414 0L2 9v8a1 1 0 001 1h5a1 1 0 001-1V13h2v4a1 1 0 001 1h5a1 1 0 001-1V9l-7.293-7.293z" />
              </svg>
              Back to Home
            </Link>

            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.history.back(); }}
              className="text-sm underline text-slate-700/90 hover:text-slate-900"
            >
              Go back
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Tip: If you typed the address manually, double-check for typos.
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-200 animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-pink-200 animate-pulse delay-75" />
            <span className="h-2 w-2 rounded-full bg-amber-200 animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </main>
  );
}
