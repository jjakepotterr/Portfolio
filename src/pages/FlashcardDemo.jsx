import { Link } from "react-router-dom";

export const FlashcardDemo = () => {
    return (
        <main className="min-h-screen bg-background text-foreground px-4 py-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between gap-4 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold">Flashcard Study App Demo</h1>
                    <Link
                        to="/"
                        className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors"
                    >
                        Back to Portfolio
                    </Link>
                </div>

                <p className="text-muted-foreground mb-6">
                    Watch a quick walkthrough of the app features and flow.
                </p>

                <div className="rounded-lg overflow-hidden border border-border bg-card">
                    <video
                        controls
                        className="w-full h-auto"
                        preload="metadata"
                        src="/flashcards-screenrecording.mov"
                    >
                        Your browser does not support this video format.
                    </video>
                </div>
            </div>
        </main>
    );
};
