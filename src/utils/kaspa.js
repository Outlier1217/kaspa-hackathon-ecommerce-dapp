// Wallet connect
export const connectKaspaWallet = async () => {
  if (!window.kasware) {
    alert("Kasware wallet not found. Please install the Kasware extension.");
    return null;
  }

  try {
    const address = window.kasware._selectedAddress;

    if (!address) {
      alert("Please unlock your Kasware wallet");
      return null;
    }

    return address;
  } catch (err) {
    console.error(err);
    alert("Failed to connect wallet. Please try again.");
    return null;
  }
};

// Payment (intent based – hackathon safe)
export const sendKaspaPayment = async (toAddress, amount) => {
  if (!window.kasware) {
    alert("Kasware wallet not found");
    return null;
  }

  const start = performance.now();

  try {
    await window.kasware.request({
      method: "kaspa_sendTransaction",
      params: [
        {
          to: toAddress,
          amount: amount
        }
      ]
    });

    const end = performance.now();

    return {
      status: "success",
      time: (end - start).toFixed(2)
    };
  } catch (err) {
    const end = performance.now();

    return {
      status: "cancelled",
      time: (end - start).toFixed(2)
    };
  }
};