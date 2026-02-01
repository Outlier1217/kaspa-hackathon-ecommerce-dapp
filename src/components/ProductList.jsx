import { useState } from "react";
import { products } from "../data/products";
import { sendKaspaPayment } from "../utils/kaspa";

const ProductList = ({ onTransactionUpdate }) => {
  const [lastTx, setLastTx] = useState(null);
  const [processingProduct, setProcessingProduct] = useState(null);

  const buyProduct = async (product) => {
    if (!window.kasware || !window.kasware._selectedAddress) {
      alert("Please connect your Kaspa wallet first!");
      return;
    }

    setProcessingProduct(product.id);
    
    const result = await sendKaspaPayment(
      window.kasware._selectedAddress,
      product.price
    );

    setProcessingProduct(null);
    setLastTx({
      product: product.name,
      amount: product.price,
      status: result.status,
      time: result.time
    });

    onTransactionUpdate && onTransactionUpdate(result.time, result.status);

    if (result.status === "success") {
      console.log(`✅ Payment Intent Sent Successfully!\n⚡ Transaction Time: ${result.time} ms\n📦 Product: ${product.name}`);
    } else {
      console.log(`⏸ Transaction Cancelled by User\n⚡ Response Time: ${result.time} ms`);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px"
      }}>
        <div>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "8px"
          }}>
            🛒 Digital Products
          </h2>
          <p style={{
            color: "#94a3b8",
            fontSize: "16px",
            marginBottom: "5px"
          }}>
            Click "Buy Now" to experience Kaspa's instant transaction speed
          </p>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          background: "rgba(30, 41, 59, 0.5)",
          borderRadius: "20px"
        }}>
          <div style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#10b981",
            animation: "pulse 2s infinite"
          }}></div>
          <span style={{
            color: "#f1f5f9",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            All items: 0.1 KAS each
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "25px"
      }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.4))",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.3)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}>
              <div>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#f1f5f9",
                  marginBottom: "10px"
                }}>
                  {p.name}
                </h3>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "5px"
                }}>
                  <span style={{
                    padding: "6px 12px",
                    background: "rgba(30, 41, 59, 0.7)",
                    borderRadius: "20px",
                    fontSize: "13px",
                    color: "#94a3b8"
                  }}>
                    Digital Product
                  </span>
                </div>
              </div>
              <div style={{
                textAlign: "right"
              }}>
                <div style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#fbbf24",
                  marginBottom: "5px"
                }}>
                  {p.price} KAS
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#64748b"
                }}>
                  ≈ ${(p.price * 0.1).toFixed(2)}
                </div>
              </div>
            </div>

            <p style={{
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: "1.6",
              marginBottom: "25px",
              minHeight: "60px"
            }}>
              Experience the speed of Kaspa with this digital purchase. Instant delivery upon confirmation.
            </p>

            <button
              onClick={() => buyProduct(p)}
              disabled={processingProduct === p.id}
              style={{
                width: "100%",
                padding: "16px",
                background: processingProduct === p.id 
                  ? "rgba(30, 41, 59, 0.7)" 
                  : "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: processingProduct === p.id ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                opacity: processingProduct === p.id ? 0.7 : 1
              }}
              onMouseOver={(e) => {
                if (processingProduct !== p.id) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(245, 158, 11, 0.3)";
                }
              }}
              onMouseOut={(e) => {
                if (processingProduct !== p.id) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {processingProduct === p.id ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now with Kaspa
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Last Transaction Details */}
      {lastTx && (
        <div style={{
          marginTop: "20px",
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.4))",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "25px"
          }}>
            <h3 style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <div style={{
                padding: "10px",
                background: lastTx.status === "success" ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)",
                borderRadius: "12px"
              }}>
                {lastTx.status === "success" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              Transaction Details
            </h3>
            <div style={{
              padding: "8px 16px",
              background: "rgba(30, 41, 59, 0.7)",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#94a3b8"
            }}>
              For Hackathon Judges
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
            marginBottom: "25px"
          }}>
            <div style={{
              background: "rgba(15, 23, 42, 0.6)",
              padding: "20px",
              borderRadius: "12px"
            }}>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "8px"
              }}>
                Product
              </div>
              <div style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#f1f5f9"
              }}>
                {lastTx.product}
              </div>
            </div>
            
            <div style={{
              background: "rgba(15, 23, 42, 0.6)",
              padding: "20px",
              borderRadius: "12px"
            }}>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "8px"
              }}>
                Status
              </div>
              <div style={{
                fontSize: "18px",
                fontWeight: "700",
                color: lastTx.status === "success" ? "#10b981" : "#ef4444"
              }}>
                {lastTx.status === "success" ? "✅ Success" : "❌ Cancelled"}
              </div>
            </div>
            
            <div style={{
              background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.1))",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(245, 158, 11, 0.3)"
            }}>
              <div style={{
                fontSize: "14px",
                color: "#fbbf24",
                marginBottom: "8px"
              }}>
                Transaction Time
              </div>
              <div style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#fbbf24"
              }}>
                {lastTx.time} ms
              </div>
            </div>
            
            <div style={{
              background: "rgba(15, 23, 42, 0.6)",
              padding: "20px",
              borderRadius: "12px"
            }}>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "8px"
              }}>
                Amount
              </div>
              <div style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#f1f5f9"
              }}>
                {lastTx.amount} KAS
              </div>
            </div>
          </div>

          {/* Speed Rating */}
          <div style={{
            background: "rgba(15, 23, 42, 0.4)",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "20px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px"
            }}>
              <span style={{
                color: "#f1f5f9",
                fontSize: "16px",
                fontWeight: "500"
              }}>
                Transaction Speed Rating
              </span>
              <span style={{
                fontSize: "14px",
                color: "#94a3b8"
              }}>
                Kaspa Network Performance
              </span>
            </div>
            <div style={{
              width: "100%",
              height: "10px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              overflow: "hidden",
              marginBottom: "10px"
            }}>
              <div 
                style={{ 
                  width: `${Math.min(100, (1000 - parseInt(lastTx.time || 0)) / 10)}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #10b981, #fbbf24)",
                  borderRadius: "5px",
                  transition: "width 1s ease-in-out"
                }}
              ></div>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#64748b"
            }}>
              <span>Slow</span>
              <span>Fast</span>
              <span>Instant ⚡</span>
            </div>
          </div>
        </div>
      )}

      {/* Instruction for Judges */}
      {!lastTx && (
        <div style={{
          textAlign: "center",
          padding: "40px 30px",
          border: "2px dashed rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          marginTop: "20px"
        }}>
          <div style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 20px",
            background: "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 179, 8, 0.2))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#f1f5f9",
            marginBottom: "15px"
          }}>
            For Hackathon Judges
          </h4>
          <p style={{
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontSize: "16px",
            marginBottom: "10px"
          }}>
            Connect wallet → Click "Buy Now" → See Kaspa's transaction speed in real-time.
          </p>
          <p style={{
            color: "#fbbf24",
            fontWeight: "600",
            fontSize: "18px"
          }}>
            Transaction time is prominently displayed above and updates instantly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;