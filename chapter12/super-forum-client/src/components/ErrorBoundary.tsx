import React, { ErrorInfo } from "react";
import "./ErrorBoundary.css";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorDetails {
  error: Error;
  errorInfo: ErrorInfo;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorDetails?: ErrorDetails;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (
    error: any
  ): Partial<ErrorBoundaryState> => {
    return { hasError: true };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const errorDetails: ErrorDetails = { error, errorInfo };

    console.log("errorDetails", errorDetails);

    this.setState({ hasError: true, errorDetails });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2 style={{ padding: "2em" }}>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}