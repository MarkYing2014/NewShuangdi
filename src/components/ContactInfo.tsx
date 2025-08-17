

import { Mail, Phone, Smartphone } from 'lucide-react';


const ContactInfo = () => {
    return (
        <section id="contact-info" className="bg-white text-gray-800 relative py-[15px] md:py-[25px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              联系我们
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              今天就联系我们
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              您有关于我们产品的问题吗？请联系我们团队，讨论我们如何帮助您实现您的想法。
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Felix's Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/asset/liyilei.jpeg"
                  alt="liyilei"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">李以镭</h3>
                <p className="text-gray-600 mb-4">销售经理</p>
                <div className="flex flex-col space-y-3">
                  <a href="mailto:liyilei@bluebird.com" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    liyilei@isri-shuangdi.com
                  </a>
                  <a href="tel:18667601495" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Smartphone className="w-5 h-5 mr-2" />
                    18667601495
                  </a>
                  <a href="tel:0571-81956329" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    +86-575-7071788
                  </a>
                </div>
              </div>
            </div>
  
            {/* Love's Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/asset/wangronglin.jpeg"
                  alt="wangronglin"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">王荣林</h3>
                <p className="text-gray-600 mb-4">研发经理</p>
                <div className="flex flex-col space-y-3">
                  <a href="mailto:wangronglin@bluebird.com" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    wangronglin@isri-shuangdi.com
                  </a>
                  <a href="tel:13588888888" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Smartphone className="w-5 h-5 mr-2" />
                    13588888888
                  </a>
                  <a href="tel:0571-81956312" className="flex items-center text-gray-700 hover:text-blue-600">
                    <Phone className="w-5 h-5 mr-2" />
                    +86-575-7071787
                  </a>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactInfo;
