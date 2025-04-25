import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 mt-12 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        {/* Top Info Section */}
        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-yellow-300">
            Welcome to BrainBuddies: Learn Together, Succeed Together.
          </p>
          <p className="text-gray-300">
            Collaborate, complete assignments, and grade each other for mutual growth and learning.
          </p>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">About Us</h3>
            <p className="text-sm">
              We are a platform dedicated to fostering collaborative learning. Create, complete, and evaluate assignments with your friends while growing together.
            </p>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to='/create-assignment' className="hover:text-yellow-300">Create Assignments</Link></li>
              <li><Link to='/all-assignment' className="hover:text-yellow-300">all assignment</Link></li>
              <li><Link to='/pendingAssignment' className="hover:text-yellow-300">pending Assignment</Link></li>
              <li><Link to='/my-assignment' className="hover:text-yellow-300">my assignment</Link></li>
             
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300">Start an Assignment</a></li>
              <li><a href="#" className="hover:text-yellow-300">Guidelines</a></li>
              <li><a href="#" className="hover:text-yellow-300">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Contact</h3>
            <p className="text-sm">
              Email: <a href="mailto:support@groupstudyhub.com" className="hover:text-yellow-300">support@groupstudyhub.com</a>
            </p>
            <p className="text-sm">Phone: +1 (555) 987-6543</p>
            <p className="text-sm">Address: 456 Study Lane, Learn City</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-yellow-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 text-center ">
          <div className="form-control w-full md:w-1/2  mx-auto">
            <label className="input-group">
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
              <button className="btn mt-2 btn-primary">Subscribe</button>
            </label>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Stay updated with group-study tips, new features, and announcements.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 Group-Study Hub. All rights reserved. | <a href="#" className="hover:text-yellow-300">Privacy Policy</a> | <a href="#" className="hover:text-yellow-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
