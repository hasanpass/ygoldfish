import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

const MainContent = () => {
  return (
    <div className="flex-1 flex bg-[#f8fafc]">
      {/* Left Column - Navigation Tabs */}
      <LeftColumn />
      
      {/* Right Column - Main Content */}
      <RightColumn />
    </div>
  );
};

export default MainContent;
