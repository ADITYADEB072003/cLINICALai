import React from 'react';
import { Heart, Stethoscope, Shield, Brain, Activity, BookOpen } from 'lucide-react';
import ClinicalAssistant from './components/ClinicalAssistant';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4FF] via-[#F0F7FF] to-[#E6F6F5]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0067A5]/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-[#00A3A1]/20 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#0067A5]/20 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <header className="relative bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0067A5] via-[#0067A5] to-[#00A3A1] bg-clip-text text-transparent">
              AtherCare  Clinical Assistant
              </h1>
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0067A5] to-[#00A3A1] rounded-full shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00A3A1] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-[#00A3A1]" />
              <span>Evidence-Based & Secure</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Your AI-Powered
                <span className="block bg-gradient-to-r from-[#0067A5] to-[#00A3A1] bg-clip-text text-transparent">
                  Clinical Decision Support
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access evidence-based clinical information, guidelines, and differential diagnoses to support your medical decision-making process.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#00A3A1] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Evidence-Based</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0067A5] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Real-Time Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#0067A5] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">HIPAA Compliant</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-[#0067A5] to-[#0067A5] rounded-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Gemini AI Integration
                  </h3>
                </div>
                <p className="text-gray-600">
                  Advanced clinical decision support powered by state-of-the-art medical AI technology.
                </p>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-[#00A3A1] to-[#00A3A1] rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Clinical Guidelines
                  </h3>
                </div>
                <p className="text-gray-600">
                  Access to latest medical guidelines and evidence-based protocols for informed decision-making.
                </p>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-[#0067A5] to-[#00A3A1] rounded-lg">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Clinical Context
                  </h3>
                </div>
                <p className="text-gray-600">
                  Maintains conversation context for more precise clinical recommendations and differential diagnoses.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-[#0067A5] to-[#00A3A1] rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Clinical Queries
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: "🔬", text: "Evidence-based clinical guidelines" },
                { icon: "📊", text: "Differential diagnosis assistance" },
                { icon: "💊", text: "Medication protocols and interactions" },
                { icon: "🏥", text: "Emergency medicine protocols" },
                { icon: "📈", text: "Latest clinical trial findings" },
                { icon: "🔍", text: "Complex case analysis" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-[#0067A5]/5 transition-colors duration-200">
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#0067A5]/5 to-[#00A3A1]/5 rounded-2xl border border-[#0067A5]/10">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#0067A5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#0067A5] mb-1">
                    Clinical Decision Support
                  </p>
                  <p className="text-sm text-gray-600">
                    This AI assistant provides clinical decision support based on current medical evidence. Always use professional judgment and follow institutional protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ClinicalAssistant />
    </div>
  );
}

export default App;