import { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import ProductList from "./components/ProductList";

function App() {
  const [transactionSpeed, setTransactionSpeed] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const updateTransactionData = (speed, status) => {
    setTransactionSpeed(speed);
    setTransactionStatus(status);
  };

  // App container style
  const appStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a 0%, #000000 100%)",
    color: "white",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    overflowX: "hidden"
  };

  // Main container style
  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px"
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        {/* Header Section */}
        <header style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "20px 0"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "20px"
          }}>
            <div style={{
              padding: "15px",
              background: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)"
            }}>
              <span style={{ fontSize: "32px" }}>🛒</span>
            </div>
            <h1 style={{
              fontSize: "48px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              ⚡ Kaspa Shop
            </h1>
          </div>
          
          <p style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginBottom: "15px",
            maxWidth: "800px",
            margin: "0 auto 20px",
            lineHeight: "1.5"
          }}>
            Instant payments powered by Kaspa's revolutionary blockDAG technology
          </p>
          
          {/* Live Speed Monitor - For Judges */}
          <div style={{
            background: "rgba(30, 41, 59, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "30px",
            margin: "30px auto",
            maxWidth: "1000px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
          }}>
            <h2 style={{
              fontSize: "32px",
              color: "#fbbf24",
              marginBottom: "25px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}>
              <span>⚡</span>
              LIVE TRANSACTION SPEED MONITOR
              <span>⚡</span>
            </h2>
            
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginBottom: "20px"
            }}>
              {/* Speed Display */}
              <div style={{
                textAlign: "center",
                background: "rgba(15, 23, 42, 0.8)",
                padding: "25px 40px",
                borderRadius: "15px",
                minWidth: "250px",
                border: "2px solid rgba(16, 185, 129, 0.3)"
              }}>
                <div style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: transactionSpeed ? "#10b981" : "#94a3b8",
                  textShadow: transactionSpeed ? "0 0 20px rgba(16, 185, 129, 0.5)" : "none",
                  marginBottom: "10px"
                }}>
                  {transactionSpeed ? `${transactionSpeed}ms` : "---"}
                </div>
                <div style={{
                  color: "#64748b",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Transaction Time
                </div>
              </div>
              
              {/* Status Display */}
              <div style={{
                textAlign: "center",
                background: "rgba(15, 23, 42, 0.8)",
                padding: "25px 40px",
                borderRadius: "15px",
                minWidth: "250px",
                border: `2px solid ${
                  transactionStatus === "success" ? "rgba(16, 185, 129, 0.3)" : 
                  transactionStatus === "cancelled" ? "rgba(239, 68, 68, 0.3)" : 
                  "rgba(148, 163, 184, 0.3)"
                }`
              }}>
                <div style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: transactionStatus === "success" ? "#10b981" : 
                        transactionStatus === "cancelled" ? "#ef4444" : 
                        "#94a3b8",
                  marginBottom: "10px"
                }}>
                  {transactionStatus === "success" ? "✅ SUCCESS" : 
                   transactionStatus === "cancelled" ? "❌ CANCELLED" : 
                   "⏳ WAITING"}
                </div>
                <div style={{
                  color: "#64748b",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Last Status
                </div>
              </div>
              
              {/* Price Display */}
              <div style={{
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.1))",
                padding: "25px 40px",
                borderRadius: "15px",
                minWidth: "250px",
                border: "2px solid rgba(245, 158, 11, 0.3)"
              }}>
                <div style={{
                  fontSize: "52px",
                  fontWeight: "900",
                  color: "#fbbf24",
                  marginBottom: "10px"
                }}>
                  0.1 KAS
                </div>
                <div style={{
                  color: "#fbbf24",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Per Product
                </div>
              </div>
            </div>
            
            {/* Speed Indicator Bar */}
            <div style={{
              marginTop: "20px",
              padding: "20px",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
                <span style={{ color: "#94a3b8" }}>Speed Performance</span>
                <span style={{ 
                  color: transactionSpeed < 100 ? "#10b981" : 
                        transactionSpeed < 500 ? "#fbbf24" : 
                        "#ef4444",
                  fontWeight: "bold"
                }}>
                  {transactionSpeed ? (
                    transactionSpeed < 100 ? "Excellent ⚡" :
                    transactionSpeed < 500 ? "Good ⚡" :
                    "Slow ⚡"
                  ) : "Waiting for transaction"}
                </span>
              </div>
              <div style={{
                width: "100%",
                height: "10px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "5px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: transactionSpeed ? `${Math.min(100, (1000 - transactionSpeed) / 10)}%` : "0%",
                  height: "100%",
                  background: "linear-gradient(90deg, #10b981, #fbbf24)",
                  borderRadius: "5px",
                  transition: "width 1s ease-in-out"
                }} />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "30px",
          marginBottom: "40px"
        }}>
          {/* Left Column - Wallet */}
          <div>
            <div style={{
              background: "rgba(30, 41, 59, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              height: "100%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
            }}>
              <WalletConnect onTransactionUpdate={updateTransactionData} />
            </div>
          </div>

          {/* Right Column - Products */}
          <div>
            <div style={{
              background: "rgba(30, 41, 59, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
            }}>
              <ProductList onTransactionUpdate={updateTransactionData} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: "50px",
          paddingTop: "30px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px"
        }}>
          <p style={{
            fontSize: "18px",
            marginBottom: "10px",
            color: "#94a3b8"
          }}>
            Built for Kaspa Hackathon • Instant Transactions • BlockDAG Technology
          </p>
          <p style={{
            fontSize: "14px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Transaction speeds are measured end-to-end from user click to wallet response.
            This demonstrates Kaspa's revolutionary 1 Block Per Second capability with instant confirmations.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
            fontSize: "12px"
          }}>
            <span>⚡ 1 BPS</span>
            <span>•</span>
            <span>⏱ ~1s Confirmations</span>
            <span>•</span>
            <span>🔒 PHANTOM Security</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;