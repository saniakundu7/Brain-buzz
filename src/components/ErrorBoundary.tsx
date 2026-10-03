import React, { ErrorInfo, ReactNode } from "react";
import { RotateCcw, Home, AlertCircle } from "lucide-react";

interface Props {
  children: ReactNode;
  onResetLevel?: () => void;
  onGoHome?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Brain Buzz ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleRestart = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onResetLevel) {
      this.props.onResetLevel();
    }
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onGoHome) {
      this.props.onGoHome();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[260px] p-6 bg-white border border-stone-200/90 rounded-3xl shadow-sm text-center max-w-sm mx-auto my-4">
          <div className="w-12 h-12 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center justify-center mb-3 text-amber-600 shadow-xs">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold font-heading text-stone-900 mb-1">
            Puzzle Interrupted
          </h2>
          <p className="text-xs text-stone-500 mb-4 leading-relaxed">
            Your progress is safe. Let's reset this puzzle state.
          </p>

          <div className="flex gap-2 w-full">
            <button
              onClick={this.handleRestart}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all rounded-xl font-heading font-semibold text-xs text-white shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
            {this.props.onGoHome && (
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-50 hover:bg-stone-100 active:scale-95 transition-all border border-stone-200/80 rounded-xl font-heading font-semibold text-xs text-stone-700 shadow-xs"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
