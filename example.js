const { EncryptablePaymailWalletBuilder } = polywallet;
const authButton = document.getElementById('auth-button');
const paymailText = document.getElementById('paymail');

authButton.onclick = async () => {
  try {
    const wallet = await new EncryptablePaymailWalletBuilder()
      .withHandCash({
        appId: '62e34e0ff4967ccf3b5da759',
        appSecret: '1e15ef2d1724afe6c69d16ba573b661ad7d4832317b4076573c53f7f0d5bba43',
      })
      .build();
    authButton.innerText = 'Authenticated!'
    const paymail = await wallet.getPaymail();
    paymailText.innerText = "Paymail: " + paymail;
  } catch (err) {
    console.error(err);
  }
};
