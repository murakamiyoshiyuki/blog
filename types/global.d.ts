interface Window {
  gtag: (
    command: string,
    action: string,
    parameters: {
      event_category?: string
      event_label?: string
      value?: string | number
    }
  ) => void
}