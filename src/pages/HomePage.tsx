import { Link } from 'react-router-dom'
import { Search, DollarSign, Shield, TrendingUp, MapPin, TreePine, Building, Tractor, Waves, Mountain, Landmark, CreditCard } from 'lucide-react'
import TrustBadge from '../components/TrustBadge'
import EmpireNetwork from '../components/EmpireNetwork'

const featuredParcels = [
  { title: '5-Acre Wooded Homestead', price: '$79,000', acres: 5, type: 'Residential', location: 'Kenai', img: '🌲' },
  { title: '40-Acre Farm Ready Parcel', price: '$185,000', acres: 40, type: 'Agricultural', location: 'Soldotna', img: '🚜' },
  { title: 'Riverfront 2.5 Acres', price: '$145,000', acres: 2.5, type: 'Waterfront', location: 'Cooper Landing', img: '🏞️' },
  { title: 'Commercial Lot - Hwy Frontage', price: '$225,000', acres: 1.2, type: 'Commercial', location: 'Kenai', img: '🏗️' },
  { title: '10-Acre Recreational Retreat', price: '$62,000', acres: 10, type: 'Recreational', location: 'Anchor Point', img: '⛺' },
  { title: 'Homer Bluff - Ocean View', price: '$195,000', acres: 3, type: 'Residential', location: 'Homer', img: '🌅' },
];

const landTypes = [
  { icon: <TreePine size={28} />, color: 'bg-green-100 text-green-600', title: 'Residential', desc: 'Buildable lots with utilities, road access, and subdivision-ready parcels.' },
  { icon: <Building size={28} />, color: 'bg-blue-100 text-blue-600', title: 'Commercial', desc: 'Highway frontage, zoned commercial, perfect for business development.' },
  { icon: <Tractor size={28} />, color: 'bg-amber-100 text-amber-600', title: 'Agricultural', desc: 'Fertile farmland for homesteading, greenhouses, and livestock operations.' },
  { icon: <Mountain size={28} />, color: 'bg-purple-100 text-purple-600', title: 'Recreational', desc: 'Remote wilderness parcels for hunting cabins, off-grid living, and adventure.' },
  { icon: <Waves size={28} />, color: 'bg-cyan-100 text-cyan-600', title: 'Waterfront', desc: 'River, lake, and ocean-front properties with unbeatable Alaska views.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-green-200 font-semibold tracking-wide uppercase text-sm mb-3">Kenai Peninsula Land Sales</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Own a Piece of Alaska
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl">
            From riverfront homesteads to commercial parcels — find your perfect land on the Kenai Peninsula. Simple $10 flat fee listings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/browse"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 text-center"
            >
              Browse Land Listings
            </Link>
            <Link
              to="/create-listing"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 text-center"
            >
              List Your Land - $10
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Parcels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Land Listings</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Premium parcels hand-selected across the Kenai Peninsula.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredParcels.map((p, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 text-center py-8 text-6xl">{p.img}</div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{p.title}</h3>
                  <span className="text-green-600 font-bold text-lg whitespace-nowrap ml-2">{p.price}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {p.location}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">{p.type}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 text-sm text-gray-700 font-medium">
                  {p.acres} Acres
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/browse" className="text-blue-600 hover:underline font-semibold">View all land listings →</Link>
        </div>
      </div>

      {/* Land Types */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Find Your Ideal Land Type</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Whatever your vision, we have the perfect parcel to match.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {landTypes.map((lt, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className={`${lt.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>{lt.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{lt.title}</h3>
                <p className="text-gray-600 text-sm">{lt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Pricing</h3>
            <p className="text-gray-600">$10 flat fee for 60-day listings. Featured upgrades available for $20.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified sellers, secure payments, and comprehensive safety guidelines.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
            <p className="text-gray-600">Filter by price, location, features, and more to find exactly what you need.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Visibility</h3>
            <p className="text-gray-600">Professional listings with photo galleries, videos, and detailed descriptions.</p>
          </div>
        </div>
      </div>

      {/* Financing Section */}
      <div className="bg-blue-50 py-16 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Flexible Financing Options</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Multiple ways to finance your Alaska land purchase.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-blue-100 text-center">
              <Landmark className="mx-auto mb-3 text-blue-600" size={36} />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Owner Financing</h3>
              <p className="text-gray-600 text-sm">Many sellers offer direct financing with flexible terms — low down payments and competitive rates.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-blue-100 text-center">
              <Shield className="mx-auto mb-3 text-green-600" size={36} />
              <h3 className="font-bold text-lg text-gray-900 mb-2">VA & USDA Loans</h3>
              <p className="text-gray-600 text-sm">Eligible veterans and rural buyers can access zero-down financing for qualifying parcels.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-blue-100 text-center">
              <CreditCard className="mx-auto mb-3 text-purple-600" size={36} />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Land Loans</h3>
              <p className="text-gray-600 text-sm">Local Alaska credit unions and banks offer specialized land loans with favorable terms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TrustBadge />
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Own Alaska Land?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied buyers and sellers on Alaska's most trusted land marketplace.
          </p>
          <Link
            to="/create-listing"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 inline-block"
          >
            Post Your First Listing - $10
          </Link>
        </div>
      </div>

      {/* Empire Network */}
      <EmpireNetwork currentSite="kenai-land-sales" />
    </div>
  )
}
