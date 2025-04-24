const express = require('express');
const router = express.Router();

// Sample blogs data about payment methods
const blogs = [
    {
      id: 1,
      title: 'Introduction to Digital Payment Methods',
      content: 'Digital payment methods have transformed the way we make transactions. These methods enable faster, secure, and more convenient ways to pay for goods and services online. Popular methods include credit/debit cards, mobile wallets, and bank transfers.'
    },
    {
      id: 2,
      title: 'Understanding Mobile Wallets ',
      content: 'Mobile wallets store your payment information securely, allowing you to make payments with just a tap on your smartphone. Google Pay and Apple Pay are leading mobile wallet apps that integrate directly with your bank account or credit card for seamless transactions.'
    },
    {
      id: 3,
      title: 'The Rise of UPI and Its Impact on Digital Payments in India',
      content: 'Unified Payments Interface (UPI) is an instant real-time payment system that allows users to transfer money between bank accounts using a mobile device. UPI apps like PhonePe, Paytm, and Google Pay have revolutionized the digital payment landscape in India.'
    },
    {
      id: 4,
      title: 'How Credit and Debit Cards Power Online Payments',
      content: 'Credit and debit cards remain one of the most popular methods of digital payment. These cards allow users to make secure transactions online, with most payment gateways supporting major card brands like Visa, MasterCard, and American Express.'
    },
    {
      id: 5,
      title: 'Security Features in Digital Payment Methods',
      content: 'With the rise of digital payments, security has become a primary concern. Methods like two-factor authentication (2FA), 3D Secure, and end-to-end encryption are commonly used to safeguard transactions and prevent fraud in online payments.'
    },
    {
      id: 6,
      title: 'Understanding Cryptocurrencies and Blockchain in Digital Payments',
      content: 'Cryptocurrencies like Bitcoin and Ethereum are emerging as alternative digital payment methods. They offer decentralized transactions through blockchain technology, providing faster payments with low fees and no intermediaries.'
    },
    {
      id: 7,
      title: 'QR Code Payments: A Convenient Payment Method for Businesses and Consumers',
      content: 'QR codes are increasingly used in digital payments to facilitate seamless transactions. Apps like Paytm and PhonePe allow businesses and consumers to make quick payments by scanning QR codes, ensuring a fast and safe experience.'
    },
    {
      id: 8,
      title: 'The Role of Contactless Payments in the Future of Digital Transactions',
      content: 'Contactless payments, which use NFC technology, are gaining popularity worldwide. Users can make quick payments by simply tapping their card or mobile device near a payment terminal, offering convenience and reducing the risk of fraud.'
    }
  ];
  

// Route to fetch blogs
router.get('/', (req, res) => {
    try{
    res.json(blogs);
       
    }
    catch(err){
        res.json({
            message:"eroor occur"
        })
    }
});

module.exports = router;
