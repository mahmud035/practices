export function toastSuccess(message: string) {
  // replace with shadcn toast if installed
  console.log('✅', message);
}

export function toastError(message: string) {
  console.error('❌', message);
}
