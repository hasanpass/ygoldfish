import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

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
