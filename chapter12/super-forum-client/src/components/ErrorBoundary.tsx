import React, { ErrorInfo } from "react";
import * as css from "./ErrorBoundary.css";

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
    console.log("Error details:", errorDetails);
    this.setState({ hasError: true, errorDetails });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={css.container}>
          <h2 className={css.header}>
            Something has gone wrong. Please reload your screen.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}
