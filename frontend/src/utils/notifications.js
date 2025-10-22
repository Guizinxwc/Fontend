// Simple notification utility functions
export const showSuccess = (message) => {
  console.log('SUCCESS:', message);
  // You can integrate with a toast library here
  alert(`✅ ${message}`);
};

export const showError = (message) => {
  console.log('ERROR:', message);
  // You can integrate with a toast library here
  alert(`❌ ${message}`);
};

export const showInfo = (message) => {
  console.log('INFO:', message);
  // You can integrate with a toast library here
  alert(`ℹ️ ${message}`);
};

export const showWarning = (message) => {
  console.log('WARNING:', message);
  // You can integrate with a toast library here
  alert(`⚠️ ${message}`);
};