import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import PricingCard from '@/components/PricingCard';

export default function UpgradePage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header />
        
        {/* Pricing Content */}
        <div className="flex-1 overflow-auto">
          <PricingCard />
        </div>
      </div>
    </div>
  );
}
