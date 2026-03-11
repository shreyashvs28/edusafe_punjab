// This file simulates a database of possible alerts that could be sent.
export const sampleAlerts = [
  {
    title: { en: "Heatwave Warning", hi: "लू की चेतावनी", pa: "ਗਰਮੀ ਦੀ ਲਹਿਰ ਦੀ ਚੇਤਾਵਨੀ" },
    description: { en: "Temperatures are expected to exceed 45°C tomorrow. Stay indoors and hydrated.", hi: "कल तापमान 45°C से अधिक होने की उम्मीद है। घर के अंदर और हाइड्रेटेड रहें।", pa: "ਕੱਲ੍ਹ ਤਾਪਮਾਨ 45°C ਤੋਂ ਵੱਧ ਹੋਣ ਦੀ ਉਮੀਦ ਹੈ। ਘਰ ਦੇ ਅੰਦਰ ਰਹੋ ਅਤੇ ਹਾਈਡਰੇਟਿਡ ਰਹੋ।" },
    type: "Heatwave",
    severity: "High", // Critical, High, Medium, Low
  },
  {
    title: { en: "Flood Alert: Low-lying Areas", hi: "बाढ़ की चेतावनी: निचले इलाके", pa: "ਹੜ੍ਹ ਦੀ ਚੇਤਾਵਨੀ: ਨੀਵੇਂ ਇਲਾਕੇ" },
    description: { en: "River levels are rising. Be prepared for possible evacuation if you are in a low-lying area.", hi: "नदी का जलस्तर बढ़ रहा है। यदि आप निचले इलाके में हैं तो संभावित निकासी के लिए तैयार रहें।", pa: "ਨਦੀ ਦਾ ਪਾਣੀ ਦਾ ਪੱਧਰ ਵੱਧ ਰਿਹਾ ਹੈ। ਜੇਕਰ ਤੁਸੀਂ ਨੀਵੇਂ ਇਲਾਕੇ ਵਿੱਚ ਹੋ ਤਾਂ ਸੰਭਾਵਿਤ ਨਿਕਾਸੀ ਲਈ ਤਿਆਰ ਰਹੋ।" },
    type: "Flood",
    severity: "Medium",
  },
  {
    title: { en: "Fire Safety Reminder", hi: "अग्नि सुरक्षा अनुस्मारक", pa: "ਅੱਗ ਸੁਰੱਖਿਆ ਰੀਮਾਈਂਡਰ" },
    description: { en: "Reminder: Check your school's fire extinguishers and exit paths this week.", hi: "अनुस्मारक: इस सप्ताह अपने स्कूल के अग्निशामक यंत्र और निकास मार्गों की जाँच करें।", pa: "ਰੀਮਾਈਂਡਰ: ਇਸ ਹਫ਼ਤੇ ਆਪਣੇ ਸਕੂਲ ਦੇ ਅੱਗ ਬੁਝਾਊ ਯੰਤਰਾਂ ਅਤੇ ਨਿਕਾਸ ਮਾਰਗਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।" },
    type: "Fire",
    severity: "Low",
  },
  {
    title: { en: "Earthquake Drill Scheduled", hi: "भूकंप ड्रिल निर्धारित", pa: "ਭੂਚਾਲ ਡਰਿੱਲ ਨਿਯਤ" },
    description: { en: "A mandatory earthquake safety drill will be conducted on Friday at 11:00 AM.", hi: "शुक्रवार को सुबह 11:00 बजे एक अनिवार्य भूकंप सुरक्षा ड्रिल आयोजित की जाएगी।", pa: "ਸ਼ੁੱਕਰਵਾਰ ਨੂੰ ਸਵੇਰੇ 11:00 ਵਜੇ ਇੱਕ ਲਾਜ਼ਮੀ ਭੂਚਾਲ ਸੁਰੱਖਿਆ ਡਰਿੱਲ ਆਯੋਜਿਤ ਕੀਤੀ ਜਾਵੇਗੀ।" },
    type: "Earthquake",
    severity: "Low",
  },
    {
    title: { en: "Industrial Gas Leak Reported", hi: "औद्योगिक गैस रिसाव की सूचना", pa: "ਉਦਯੋਗਿਕ ਗੈਸ ਲੀਕ ਦੀ ਸੂਚਨਾ" },
    description: { en: "Gas leak reported near Sector 5. All schools in the area must initiate Shelter-in-Place protocol immediately. Close all windows and doors.", hi: "सेक्टर 5 के पास गैस रिसाव की सूचना है। क्षेत्र के सभी स्कूलों को तुरंत शेल्टर-इन-प्लेस प्रोटोकॉल शुरू करना होगा। सभी खिड़कियां और दरवाजे बंद कर दें।", pa: "ਸੈਕਟਰ 5 ਦੇ ਨੇੜੇ ਗੈਸ ਲੀਕ ਦੀ ਸੂਚਨਾ ਹੈ। ਖੇਤਰ ਦੇ ਸਾਰੇ ਸਕੂਲਾਂ ਨੂੰ ਤੁਰੰਤ ਸ਼ੈਲਟਰ-ਇਨ-ਪਲੇਸ ਪ੍ਰੋਟੋਕੋਲ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਸਾਰੀਆਂ ਖਿੜਕੀਆਂ ਅਤੇ ਦਰਵਾਜ਼ੇ ਬੰਦ ਕਰ ਦਿਓ।" },
    type: "Industrial Accident",
    severity: "Critical",
  },
];
