// components/TawkToChat.js
'use client'
import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/68679960dd67f9190a434529/1ivaau8rg';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  }, []);

  return null;
}