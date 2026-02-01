import { useState } from "react";
import { connectKaspaWallet } from "../utils/kaspa";

const WalletConnect = ({ onTransactionUpdate }) => {
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = async () => {
    setIsConnecting(true);
    const addr = await connectKaspaWallet();
    if (addr) {
      setAddress(addr);
      onTransactionUpdate && onTransactionUpdate(null, "connected");
    }
    setIsConnecting(false);
  };

  const formatAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const disconnect = () => {
    setAddress(null);
    onTransactionUpdate && onTransactionUpdate(null, "disconnected");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
      }}>
        <h2 style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#f1f5f9"
        }}>
          Kaspa Wallet
        </h2>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <div style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: address ? "#10b981" : "#ef4444",
            animation: address ? "pulse 2s infinite" : "none"
          }}></div>
          <span style={{
            color: address ? "#94a3b8" : "#ef4444",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            {address ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>

      {address ? (
        <div style={{
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))",
          borderRadius: "16px",
          padding: "25px",
          border: "1px solid rgba(16, 185, 129, 0.3)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{
                padding: "10px",
                background: "rgba(16, 185, 129, 0.2)",
                borderRadius: "12px"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div style={{
                  fontSize: "14px",
                  color: "#94a3b8"
                }}>
                  Connected Wallet
                </div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#f1f5f9",
                  letterSpacing: "0.5px"
                }}>
                  {formatAddress(address)}
                </div>
              </div>
            </div>
            <button
              onClick={disconnect}
              style={{
                padding: "8px 16px",
                background: "rgba(239, 68, 68, 0.2)",
                color: "#ef4444",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Disconnect
            </button>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px"
          }}>
            <div style={{
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#fbbf24",
                marginBottom: "5px"
              }}>
                0.1 KAS
              </div>
              <div style={{
                fontSize: "12px",
                color: "#64748b"
              }}>
                Per Item
              </div>
            </div>
            <div style={{
              background: "rgba(16, 185, 129, 0.1)",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#10b981",
                marginBottom: "5px"
              }}>
                Ready
              </div>
              <div style={{
                fontSize: "12px",
                color: "#64748b"
              }}>
                To Purchase
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))",
          borderRadius: "20px",
          padding: "40px 30px",
          border: "2px dashed rgba(255, 255, 255, 0.1)"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            background: "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 179, 8, 0.2))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#f1f5f9",
            marginBottom: "10px"
          }}>
            Connect Your Kaspa Wallet
          </h3>
          <p style={{
            color: "#94a3b8",
            marginBottom: "25px",
            fontSize: "15px",
            lineHeight: "1.5",
            maxWidth: "300px",
            margin: "0 auto 25px"
          }}>
            Connect your Kasware wallet to experience instant Kaspa transactions
          </p>
          <button
            onClick={connect}
            disabled={isConnecting}
            style={{
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
              padding: "16px",
              background: "linear-gradient(135deg, #f97316, #eab308)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
            onMouseOver={(e) => {
              if (!isConnecting) {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(245, 158, 11, 0.4)";
              }
            }}
            onMouseOut={(e) => {
              if (!isConnecting) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            {isConnecting ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
                Connecting...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Connect Kaspa Wallet
              </>
            )}
          </button>
          <p style={{
            color: "#64748b",
            fontSize: "12px",
            marginTop: "15px"
          }}>
            Make sure Kasware extension is installed and unlocked
          </p>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;