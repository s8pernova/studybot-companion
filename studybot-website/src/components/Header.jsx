import { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
	const timer = setInterval(() => {
	  setCurrentTime(new Date());
	}, 1000);
	
	return () => {
	  clearInterval(timer);
	};
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { 
	hour: '2-digit', 
	minute: '2-digit'
  });
  
  return (
	<h2 className="headerbar">
	  {formattedTime}
	</h2>
  );
};

export default Header;
