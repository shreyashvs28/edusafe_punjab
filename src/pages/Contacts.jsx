import React from 'react';
import { contactsData } from '../data/contactsData'; // We will create this data file later
import { Siren, Phone } from 'lucide-react';

const ContactsPage = ({ language, t }) => (
    <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.contactsPageTitle}</h2>
        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t.stateHelplines}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {contactsData.state.map((contact, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center">
                        <div className="bg-red-100 p-3 rounded-full mr-4">
                            <Siren className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-gray-800">{contact.name[language]}</p>
                            <a href={`tel:${contact.number}`} className="text-xl text-red-600 font-mono tracking-wider hover:underline">{contact.number}</a>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t.districtHelplines}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactsData.district.map((contact, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center">
                       <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-bold text-lg text-gray-800">{contact.name[language]}</p>
                            <a href={`tel:${contact.number}`} className="text-xl text-blue-600 font-mono tracking-wider hover:underline">{contact.number}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ContactsPage;
