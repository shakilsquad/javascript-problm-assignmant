/*
আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

*/
function paperRequirements(copiesOfBook1, copiesOfBook2, copiesOfBook3) {
      // Define the number of pages required for each book
      const pagesPerBook = [100, 200, 300];
  
      // Calculate the total pages needed for each book
      const totalPagesBook1 = copiesOfBook1 * pagesPerBook[0];
      const totalPagesBook2 = copiesOfBook2 * pagesPerBook[1];
      const totalPagesBook3 = copiesOfBook3 * pagesPerBook[2];
  
      // Calculate the total pages needed for all books
      const totalPaperRequired = totalPagesBook1 + totalPagesBook2 + totalPagesBook3;
  
      return totalPaperRequired;
  }
  
  // Example usage:
  const copiesOfBook1 = 5;
  const copiesOfBook2 = 3;
  const copiesOfBook3 = 2;
  
  const totalPaper = paperRequirements(copiesOfBook1, copiesOfBook2, copiesOfBook3);
  console.log(`Total pages of paper required: ${totalPaper}`);
  