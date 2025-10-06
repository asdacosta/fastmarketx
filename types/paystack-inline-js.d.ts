declare module "@paystack/inline-js" {
  export interface PaystackConfig {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    ref?: string;
    onClose?: () => void;
    callback?: (response: { reference: string }) => void;
  }

  export default class PaystackPop {
    constructor();
    setup(config: PaystackConfig): { openIframe: () => void };
    resumeTransaction(reference: string): { openIframe: () => void }; // ✅ added
  }
}
