import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You could log this to Sentry or another service here
        console.error("React Error Boundary Caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-warm-bg flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl border border-red-200">
                        <AlertTriangle className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-dark mb-4">Rendering Interrupted</h1>
                    <p className="text-muted text-lg max-w-lg mb-8 leading-relaxed">
                        The scholarly interface encountered an unexpected anomaly. Our technical liaisons have been notified of this disruption.
                    </p>
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-4 bg-dark text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-secondary transition-colors flex items-center gap-3"
                    >
                        <Home className="w-4 h-4" /> Return to Journal Insights
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
