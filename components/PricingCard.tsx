"use client"
import { IconCheck, IconX, IconCrown, IconRocket, IconStar } from '@tabler/icons-react';
import { useState } from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  gradient: string;
}

const PricingCard = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: isAnnual ? "$9" : "$12",
      period: isAnnual ? "/month" : "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 10 meetings per month",
        "Basic AI transcription",
        "Meeting summaries",
        "Email support",
        "Export to PDF"
      ],
      notIncluded: [
        "Advanced analytics",
        "Team collaboration",
        "Priority support"
      ],
      icon: IconStar,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: isAnnual ? "$29" : "$39",
      period: isAnnual ? "/month" : "/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to 100 meetings per month",
        "Advanced AI transcription",
        "Detailed analytics",
        "Team collaboration",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      notIncluded: [
        "Unlimited meetings",
        "Dedicated account manager"
      ],
      popular: true,
      icon: IconRocket,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: isAnnual ? "$99" : "$129",
      period: isAnnual ? "/month" : "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited meetings",
        "Enterprise-grade security",
        "Dedicated account manager",
        "Custom AI training",
        "Advanced integrations",
        "White-label options",
        "24/7 phone support",
        "SLA guarantees"
      ],
      notIncluded: [],
      icon: IconCrown,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock the full potential of YGoldfish with our powerful features
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-purple-500 shadow-2xl shadow-purple-500/20'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center mb-6`}>
                <tier.icon size={32} className="text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
                {isAnnual && (
                  <p className="text-green-600 text-sm mt-1">Save 25% with annual billing</p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-gray-900 font-semibold mb-3">What's included:</h4>
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <IconCheck size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <IconX size={20} className="text-gray-400 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 border border-gray-300'
                }`}
              >
                {tier.popular ? 'Get Started Now' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Contact our support team
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
