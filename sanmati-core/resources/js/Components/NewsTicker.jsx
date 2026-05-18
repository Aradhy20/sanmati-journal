import { motion } from 'framer-motion';

export default function NewsTicker({ items = [] }) {
    const displayItems = items.length > 0 ? items : [
        { id: 0, content: "Call for Papers: Volume 1, Issue 1 (Jan-Mar 2026)", type: "info" },
        { id: -1, content: "Submission Deadline: 25th February 2026", type: "urgent" },
        { id: -2, content: "Peer Review Process: Fast-Track (4-6 Weeks)", type: "info" }
    ];

    return (
        <div className="bg-blue-900 text-white overflow-hidden py-3 relative border-b border-blue-800">
            <div className="absolute inset-y-0 left-0 bg-blue-900 w-20 z-10 fade-r" />
            <div className="absolute inset-y-0 right-0 bg-blue-900 w-20 z-10 fade-l" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center text-sm font-medium tracking-wide">
                            {displayItems.map((item) => (
                                <span key={item.id} className="flex items-center gap-6">
                                    <span className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${item.type === 'urgent' ? 'bg-rose-400 animate-pulse' : 'bg-yellow-400'}`} />
                                        {item.content}
                                    </span>
                                    <span className="text-blue-300">|</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
