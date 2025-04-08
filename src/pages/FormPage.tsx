import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  howHeard: string[];
  interests: string[];
  specialRequests: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    howHeard: [],
    interests: [],
    specialRequests: '',
  });

  const [visiting, setVisiting] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'howHeard' | 'interests') => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        [category]: [...formData[category], value],
      });
    } else {
      setFormData({
        ...formData,
        [category]: formData[category].filter(item => item !== value),
      });
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisiting(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold px-19">We're Excited to Meet You</h2>
        
        </div>
        
        <p className="text-sm text-[#0D0D0D99] mb-4">
        At RCCG Strongtower Stouffville, we’re thrilled that you’re considering joining our family. Let us know a little about you, and we’ll make sure your first visit is warm and welcoming. Fill out the form below, and we’ll be in touch soon!  
        </p>
        <p className='text-[#0D0D0D99] font-bold py-4'>Connect With Us</p>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="Full Name"
              placeholder='Full Name'
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99] mb-2">
            Are you visiting for the first time?
            </label>
            <div className="flex flex-col gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visiting"
                  value="yes"
                  className="mr-2"
                  checked={visiting === 'yes'}
                  onChange={handleRadioChange}
                />
                <span className='text-[#0D0D0D99] '>Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="visiting"
                  value="no"
                  className="mr-2"
                  checked={visiting === 'no'}
                  onChange={handleRadioChange}
                />
                <span className='text-[#0D0D0D99] '>No</span>
              </label>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-2">
              How did you hear about us?
            </label>
            <div className="grid grid-cols-1 gap-2">
              {['Friend/Family', 'Google', 'Instagram', 'Facebook', 'Email', 'Other'].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    name="howHeard"
                    value={option}
                    className="mr-2"
                    onChange={(e) => handleCheckboxChange(e, 'howHeard')}
                    checked={formData.howHeard.includes(option)}
                  />
                  <span className='text-[#0D0D0D99] '>{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-2">
              What services are you interested in? (Check all that apply)
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Sunday Service', 'MIdweek Bible  Study', 'Prayer Meetings', 'Volunteering', 'Youth/Children’s Programs',
                'Community Outreach', 'Other'
              ].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value={option}
                    className="mr-2"
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                    checked={formData.interests.includes(option)}
                  />
                  <span className='text-[#0D0D0D99] '>{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#0D0D0D99]  mb-1">
              Do you have any specific or unique requests?
            </label>
            <textarea
              name="specialRequests"
              className="w-full p-2 border border-gray-300 rounded"
              rows={3}
              value={formData.specialRequests}
              onChange={handleInputChange}
            ></textarea>
          </div>
          
          <div className="border-t pt-4 mb-4">
            <p className="text-sm text-[#0D0D0D99]  mb-4">
              Next Steps:
              <br />
              Once you submit this form, our team will reach out to you with more
              information about our services and guide you through scheduling. Please 
              check your inbox (and spam folder if needed) for a reply from our team!
            </p>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;