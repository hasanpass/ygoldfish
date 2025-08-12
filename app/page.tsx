import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        {/* <MainContent /> */}
      </div>
    </div>
  );
}