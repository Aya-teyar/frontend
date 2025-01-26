import React, { useState } from 'react';
import { FaSearch, FaStar, FaChevronRight, FaSlidersH } from 'react-icons/fa';

import teacherc from "../assets/teacher.png";
import clock from "../assets/clock.png";
import download from "../assets/Download.png";
import video from "../assets/video.png";
import E1 from "../assets/E1.png";
import E2 from "../assets/E2.png";
import E3 from "../assets/E3.png";
import E4 from "../assets/E4.png";
import rating from "../assets/ratingstar.png";
import see from "../assets/see.png";

const colors = {
  primary: '#1BA97F',
  primaryDark: '#158F6B',
  primaryLight: '#E6F4EF',
};

// Sample teacher data
const teachersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: teacherc,
    description: "Expert in web development",
    rating: 4.8,
    duration: "2hr 30min",
    courses: 45,
    sales: 380,
    students: 250,
    level: "Expert",
    price: "Paid",
    category: "Development",
    language: "English",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: teacherc,
    description: "UI/UX design specialist",
    rating: 4.5,
    duration: "1hr 45min",
    courses: 28,
    sales: 220,
    students: 180,
    level: "Intermediate",
    price: "Paid",
    category: "Design",
    language: "English",
  },
  {
    id: 3,
    name: "Emma Davis",
    image: teacherc,
    description: "Marketing strategy and social media expert",
    rating: 4.9,
    duration: "3hr 15min",
    courses: 32,
    sales: 290,
    students: 210,
    level: "Beginner",
    price: "Free",
    category: "Marketing",
    language: "French",
  },
];

const TeacherCard = ({ teacher }) => (
  <div className="w-[384px] h-[532px] border-[2px] border-black rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
    <img src={teacher.image} alt={teacher.name} className="w-[332px] h-[256px] object-cover rounded-lg mb-4" />
    <h3 className="font-semibold text-lg">{teacher.name}</h3>
    <div className="container my-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-600 text-sm line-clamp-2 flex-1">{teacher.description}</p>
        <div className="flex items-center gap-2 ml-2">
          <span className="text-black font-medium">{teacher.rating}</span>
          <FaStar className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-8 mb-4 flex-wrap">
        <span><img src={clock} alt="duration" className="inline mr-2" />{teacher.duration}</span>
        <span>|</span>
        <span><img src={video} alt="course" className="inline mr-2" />{teacher.courses} Courses</span>
        <span>|</span>
        <span><img src={download} alt="download" className="inline mr-2" />{teacher.sales} Sales</span>
      </div>
    </div>
    <div className="py-6">
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {[E1, E2, E3, E4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white">
              <img src={i} alt="student" className="w-full h-full object-cover rounded-full" />
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
            +{E1}
          </div>
        </div>
        <button
          className="px-4 py-2 text-sm border hover:bg-gray-50"
        >
          See Profile
        </button>
      </div>
    </div>
  </div>
);

const Aftersignup = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [teachers, setTeachers] = useState(teachersData);
  const [activeFilters, setActiveFilters] = useState({
    category: 'All',
    level: [],
    price: [],
    rating: [],
    language: [],
  });
  const [sortBy, setSortBy] = useState('Popular');

  const filterCategories = [
    { title: 'All', count: teachers.length },
    { title: 'Development', count: teachers.filter(t => t.category === 'Development').length },
    { title: 'Design', count: teachers.filter(t => t.category === 'Design').length },
    { title: 'Marketing', count: teachers.filter(t => t.category === 'Marketing').length },
  ];

  const filterOptions = {
    level: ['Beginner', 'Intermediate', 'Expert'],
    price: ['Free', 'Paid'],
    rating: ['4.0+', '4.5+', '4.8+'],
    language: ['English', 'French', 'Arabic'],
  };

  const sortOptions = ['Popular', 'Newest', 'Top Rated', 'Price: Low to High', 'Price: High to Low'];

  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (category === 'category') {
        return { ...prev, category: value };
      }

      const valueArray = prev[category];
      if (valueArray.includes(value)) {
        newFilters[category] = valueArray.filter(item => item !== value);
      } else {
        newFilters[category] = [...valueArray, value];
      }
      return newFilters;
    });
  };

  const handleSort = (option) => {
    setSortBy(option);
    let sortedTeachers = [...teachers];

    switch (option) {
      case 'Newest':
        sortedTeachers.sort((a, b) => b.id - a.id);
        break;
      case 'Top Rated':
        sortedTeachers.sort((a, b) => b.rating - a.rating);
        break;
      case 'Price: Low to High':
        sortedTeachers.sort((a, b) => a.price.localeCompare(b.price));
        break;
      case 'Price: High to Low':
        sortedTeachers.sort((a, b) => b.price.localeCompare(a.price));
        break;
      default:
        sortedTeachers.sort((a, b) => b.sales - a.sales);
    }

    setTeachers(sortedTeachers);
  };

  const filterTeachers = () => {
    return teachers.filter(teacher => {
      if (activeFilters.category !== 'All' && teacher.category !== activeFilters.category) {
        return false;
      }
      if (activeFilters.level.length > 0 && !activeFilters.level.includes(teacher.level)) {
        return false;
      }
      if (activeFilters.price.length > 0 && !activeFilters.price.includes(teacher.price)) {
        return false;
      }
      if (activeFilters.rating.length > 0) {
        const meetsRating = activeFilters.rating.some(rating => {
          const minRating = parseFloat(rating);
          return teacher.rating >= minRating;
        });
        if (!meetsRating) return false;
      }
      if (activeFilters.language.length > 0 && !activeFilters.language.includes(teacher.language)) {
        return false;
      }
      return true;
    });
  };

  const filteredTeachers = filterTeachers();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome To DZ-Teacher</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search teachers, courses..."
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ focusRingColor: colors.primaryLight }}
              />
              <button
                style={{ backgroundColor: colors.primary }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white hover:opacity-90"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-lg border hover:bg-gray-50 md:hidden"
              >
                <FaSlidersH className="w-5 h-5" />
              </button>
              {filterCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => handleFilterChange('category', category.title)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilters.category === category.title
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border hover:bg-gray-50'
                  }`}
                >
                  {category.title} ({category.count})
                </button>
              ))}
            </div>

            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-white border hover:bg-gray-50 flex items-center gap-2">
                Sort: {sortBy}
                <FaChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border hidden group-hover:block z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSort(option)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className={`w-64 flex-shrink-0 transition-all duration-300 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Filter</span>
                <span className="text-sm text-gray-600">{filteredTeachers.length} results</span>
              </div>

              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h3 className="font-medium mb-3 capitalize">{category}</h3>
                  {options.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <input
                        type="checkbox"
                        checked={activeFilters[category].includes(option)}
                        onChange={() => handleFilterChange(category, option)}
                        className="rounded"
                        style={{ accentColor: colors.primary }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aftersignup;
