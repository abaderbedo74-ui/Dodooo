/* ========================================
   Elegance Boutique - JavaScript التفاعلي
   ======================================== */

// قاعدة البيانات للمنتجات - 50 منتج
const products = [
  // فساتين سهرة (15)
  { id: 1, name: "فستان سهرة فاخر", category: "فساتين سهرة", categoryEn: "evening", price: 2500, oldPrice: 3500, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.8, reviews: 24, badge: "خصم 30%", description: "فستان سهرة فاخر مصنوع يدوياً بأحدث التصاميم العصرية", sizes: ["S", "M", "L", "XL"], colors: ["#1a1a1a", "#D4A574", "#8B0000"] },
  { id: 2, name: "فستان سهرة ذهبي", category: "فساتين سهرة", categoryEn: "evening", price: 3800, oldPrice: 4800, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", rating: 4.9, reviews: 15, badge: "حصري", description: "فستان سهرة ذهبي فاخر بتطريز يدوي مذهل", sizes: ["S", "M", "L"], colors: ["#FFD700", "#D4A574", "#1a1a1a"] },
  { id: 3, name: "فستان سهرة أحمر", category: "فساتين سهرة", categoryEn: "evening", price: 3200, oldPrice: 4200, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.7, reviews: 18, badge: "جديد", description: "فستان سهرة أحمر ملكي بأناقة فريدة", sizes: ["S", "M", "L", "XL"], colors: ["#8B0000", "#DC143C", "#B22222"] },
  { id: 4, name: "فستان سهرة أزرق", category: "فساتين سهرة", categoryEn: "evening", price: 2800, oldPrice: 3600, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.6, reviews: 22, badge: null, description: "فستان سهرة أزرق داكن أنيق", sizes: ["M", "L", "XL"], colors: ["#191970", "#4169E1", "#000080"] },
  { id: 5, name: "فستان سهرة فضي", category: "فساتين سهرة", categoryEn: "evening", price: 4500, oldPrice: 5500, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 5.0, reviews: 8, badge: "مميز", description: "فستان سهرة فضي بتطريز فاخر", sizes: ["S", "M", "L"], colors: ["#C0C0C0", "#E8E8E8", "#A9A9A9"] },
  { id: 6, name: "فستان سهرة بنفسجي", category: "فساتين سهرة", categoryEn: "evening", price: 2900, oldPrice: 3800, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.5, reviews: 30, badge: "خصم 20%", description: "فستان سهرة بنفسجي ساحر", sizes: ["S", "M", "L", "XL"], colors: ["#800080", "#9400D3", "#4B0082"] },
  { id: 7, name: "فستان سهرة أخضر", category: "فساتين سهرة", categoryEn: "evening", price: 2600, oldPrice: 3400, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", rating: 4.4, reviews: 25, badge: null, description: "فستان سهرة أخضر زمردي أنيق", sizes: ["M", "L", "XL"], colors: ["#006400", "#228B22", "#2E8B57"] },
  { id: 8, name: "فستان سهرة وردي", category: "فساتين سهرة", categoryEn: "evening", price: 2400, oldPrice: 3200, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.7, reviews: 19, badge: "الأكثر مبيعاً", description: "فستان سهرة وردي رومانسي", sizes: ["XS", "S", "M", "L"], colors: ["#FF69B4", "#FF1493", "#DB7093"] },
  { id: 9, name: "فستان سهرة أبيض", category: "فساتين سهرة", categoryEn: "evening", price: 3500, oldPrice: 4500, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", rating: 4.8, reviews: 12, badge: "فاخر", description: "فستان سهرة أبيض كلاسيكي", sizes: ["S", "M", "L"], colors: ["#FFFFFF", "#FFF8F0", "#F5F5F5"] },
  { id: 10, name: "فستان سهرة كحلي", category: "فساتين سهرة", categoryEn: "evening", price: 3100, oldPrice: 4000, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.6, reviews: 28, badge: null, description: "فستان سهرة كحلي أنيق", sizes: ["M", "L", "XL", "XXL"], colors: ["#000080", "#191970", "#00008B"] },
  { id: 11, name: "فستان سهرة برتقالي", category: "فساتين سهرة", categoryEn: "evening", price: 2200, oldPrice: 2900, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.3, reviews: 35, badge: "خصم 25%", description: "فستان سهرة برتقالي ناري", sizes: ["S", "M", "L", "XL"], colors: ["#FF4500", "#FF8C00", "#FFA500"] },
  { id: 12, name: "فستان سهرة رمادي", category: "فساتين سهرة", categoryEn: "evening", price: 2700, oldPrice: 3500, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.5, reviews: 20, badge: null, description: "فستان سهرة رمادي أنيق", sizes: ["S", "M", "L"], colors: ["#808080", "#A9A9A9", "#696969"] },
  { id: 13, name: "فستان سهرة فيروزي", category: "فساتين سهرة", categoryEn: "evening", price: 3300, oldPrice: 4300, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 4.7, reviews: 16, badge: "عصري", description: "فستان سهرة فيروزي ساحر", sizes: ["S", "M", "L", "XL"], colors: ["#40E0D0", "#00CED1", "#20B2AA"] },
  { id: 14, name: "فستان سهرة عسلي", category: "فساتين سهرة", categoryEn: "evening", price: 2900, oldPrice: 3700, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.6, reviews: 24, badge: null, description: "فستان سهرة عسلي دافئ", sizes: ["M", "L", "XL"], colors: ["#D4A574", "#B8956A", "#C4A484"] },
  { id: 15, name: "فستان سهرة شفاف", category: "فساتين سهرة", categoryEn: "evening", price: 4000, oldPrice: 5000, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.9, reviews: 10, badge: "VIP", description: "فستان سهرة شفاف فاخر", sizes: ["S", "M", "L"], colors: ["#FFE4E1", "#FFF0F5", "#E6E6FA"] },
  
  // فساتين خطوبة (15)
  { id: 16, name: "فستان خطوبة رومانسي", category: "فساتين خطوبة", categoryEn: "engagement", price: 4200, oldPrice: 5500, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.9, reviews: 18, badge: "الأكثر مبيعاً", description: "فستان خطوبة ساحر مصمم خصيصاً لمناسبتك الخاصة", sizes: ["S", "M", "L"], colors: ["#FFF8F0", "#FFD700", "#FFC0CB"] },
  { id: 17, name: "فستان خطوبة فيروزي", category: "فساتين خطوبة", categoryEn: "engagement", price: 4800, oldPrice: 6000, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 5.0, reviews: 8, badge: "مميز", description: "فستان خطوبة فيروزي ساحر بتفاصيل دقيقة من اللؤلؤ", sizes: ["XS", "S", "M", "L"], colors: ["#40E0D0", "#E0FFFF", "#FF69B4"] },
  { id: 18, name: "فستان خطوبة أبيض", category: "فساتين خطوبة", categoryEn: "engagement", price: 5500, oldPrice: 7000, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", rating: 4.9, reviews: 25, badge: "كلاسيك", description: "فستان خطوبة أبيض فاخر", sizes: ["S", "M", "L", "XL"], colors: ["#FFFFFF", "#FFF8F0", "#FAF0E6"] },
  { id: 19, name: "فستان خطوبة ذهبي", category: "فساتين خطوبة", categoryEn: "engagement", price: 6500, oldPrice: 8000, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 5.0, reviews: 12, badge: "VIP", description: "فستان خطوبة ذهبي مرصع", sizes: ["S", "M", "L"], colors: ["#FFD700", "#DAA520", "#B8860B"] },
  { id: 20, name: "فستان خطوبة وردي", category: "فساتين خطوبة", categoryEn: "engagement", price: 3800, oldPrice: 4800, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.8, reviews: 30, badge: "رومانسي", description: "فستان خطوبة وردي حالم", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#FFB6C1", "#FF69B4", "#DB7093"] },
  { id: 21, name: "فستان خطوبة بنفسجي", category: "فساتين خطوبة", categoryEn: "engagement", price: 4500, oldPrice: 5800, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.7, reviews: 15, badge: null, description: "فستان خطوبة بنفسجي ملكي", sizes: ["S", "M", "L"], colors: ["#800080", "#9400D3", "#4B0082"] },
  { id: 22, name: "فستان خطوبة أزرق", category: "فساتين خطوبة", categoryEn: "engagement", price: 4200, oldPrice: 5200, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.6, reviews: 22, badge: null, description: "فستان خطوبة أزرق سماوي", sizes: ["S", "M", "L", "XL"], colors: ["#87CEEB", "#00BFFF", "#1E90FF"] },
  { id: 23, name: "فستان خطوبة فضي", category: "فساتين خطوبة", categoryEn: "engagement", price: 5200, oldPrice: 6500, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 4.9, reviews: 18, badge: "عصري", description: "فستان خطوبة فضي أنيق", sizes: ["S", "M", "L"], colors: ["#C0C0C0", "#E8E8E8", "#D3D3D3"] },
  { id: 24, name: "فستان خطوبة أحمر", category: "فساتين خطوبة", categoryEn: "engagement", price: 5800, oldPrice: 7200, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.8, reviews: 28, badge: "شهي", description: "فستان خطوبة أحمر فاخر", sizes: ["S", "M", "L"], colors: ["#8B0000", "#DC143C", "#B22222"] },
  { id: 25, name: "فستان خطوبة أخضر", category: "فساتين خطوبة", categoryEn: "engagement", price: 4000, oldPrice: 5000, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", rating: 4.5, reviews: 20, badge: null, description: "فستان خطوبة أخضر زمردي", sizes: ["M", "L", "XL"], colors: ["#006400", "#228B22", "#2E8B57"] },
  { id: 26, name: "فستان خطوبة عاجي", category: "فساتين خطوبة", categoryEn: "engagement", price: 4700, oldPrice: 5900, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", rating: 4.7, reviews: 16, badge: null, description: "فستان خطوبة عاجي كلاسيكي", sizes: ["S", "M", "L", "XL"], colors: ["#FFFDD0", "#F5F5DC", "#FAEBD7"] },
  { id: 27, name: "فستان خطوبة بيج", category: "فساتين خطوبة", categoryEn: "engagement", price: 3900, oldPrice: 4900, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.6, reviews: 24, badge: null, description: "فستان خطوبة بيج أنيق", sizes: ["S", "M", "L"], colors: ["#F5F5DC", "#DEB887", "#D2B48C"] },
  { id: 28, name: "فستان خطوبة شمبانيا", category: "فساتين خطوبة", categoryEn: "engagement", price: 6000, oldPrice: 7500, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.9, reviews: 14, badge: "فاخر", description: "فستان خطوبة شمبانيا فاخر", sizes: ["S", "M", "L"], colors: ["#F7E7CE", "#E8D0A9", "#C9A86C"] },
  { id: 29, name: "فستان خطوبة رمادي", category: "فساتين خطوبة", categoryEn: "engagement", price: 4300, oldPrice: 5400, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.5, reviews: 19, badge: null, description: "فستان خطوبة رمادي عصري", sizes: ["M", "L", "XL"], colors: ["#808080", "#A9A9A9", "#696969"] },
  { id: 30, name: "فستان خطوبة TURQUOISE", category: "فساتين خطوبة", categoryEn: "engagement", price: 5100, oldPrice: 6400, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 4.8, reviews: 21, badge: null, description: "فستان خطوبة فيروزي مميز", sizes: ["S", "M", "L"], colors: ["#40E0D0", "#00CED1", "#48D1CC"] },

  // فساتين كوكتيل (10)
  { id: 31, name: "فستان كوكتيل أنيق", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1800, oldPrice: 2200, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.7, reviews: 32, badge: "جديد", description: "فستان كوكتيل عصري يناسب جميع المناسبات", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#2C3E50", "#E74C3C", "#3498DB"] },
  { id: 32, name: "فستان كوكتيل أسود", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 2100, oldPrice: 2800, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.6, reviews: 28, badge: "خصم 25%", description: "فستان كوكتيل أسود كلاسيكي أنيق", sizes: ["S", "M", "L", "XL"], colors: ["#1a1a1a", "#8B4513", "#696969"] },
  { id: 33, name: "فستان كوكتيل وردي", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1600, oldPrice: 2000, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.5, reviews: 40, badge: null, description: "فستان كوكتيل وردي حلو", sizes: ["XS", "S", "M", "L"], colors: ["#FF69B4", "#FFB6C1", "#FFC0CB"] },
  { id: 34, name: "فستان كوكتيل أحمر", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1900, oldPrice: 2400, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.7, reviews: 25, badge: null, description: "فستان كوكتيل أحمر جريء", sizes: ["S", "M", "L", "XL"], colors: ["#DC143C", "#8B0000", "#FF0000"] },
  { id: 35, name: "فستان كوكتيل أزرق", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1750, oldPrice: 2100, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.4, reviews: 35, badge: null, description: "فستان كوكتيل أزرق كحلي", sizes: ["S", "M", "L"], colors: ["#000080", "#191970", "#4169E1"] },
  { id: 36, name: "فستان كوكتيل ذهبي", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 2300, oldPrice: 2900, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", rating: 4.8, reviews: 18, badge: "عصري", description: "فستان كوكتيل ذهبي لامع", sizes: ["S", "M", "L"], colors: ["#FFD700", "#DAA520", "#D4AF37"] },
  { id: 37, name: "فستان كوكتيل أخضر", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1650, oldPrice: 2000, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", rating: 4.3, reviews: 42, badge: null, description: "فستان كوكتيل أخضر زمردي", sizes: ["S", "M", "L", "XL"], colors: ["#006400", "#228B22", "#2E8B57"] },
  { id: 38, name: "فستان كوكتيل بنفسجي", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1850, oldPrice: 2300, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.6, reviews: 22, badge: null, description: "فستان كوكتيل بنفسجي أنيق", sizes: ["S", "M", "L"], colors: ["#800080", "#9400D3", "#BA55D3"] },
  { id: 39, name: "فستان كوكتيل برتقالي", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 1550, oldPrice: 1900, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 4.4, reviews: 38, badge: null, description: "فستان كوكتيل برتقالي ناري", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#FF4500", "#FF8C00", "#FFA500"] },
  { id: 40, name: "فستان كوكتيل أبيض", category: "فساتين كوكتيل", categoryEn: "cocktail", price: 2000, oldPrice: 2500, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.7, reviews: 30, badge: "كلاسيك", description: "فستان كوكتيل أبيض أنيق", sizes: ["S", "M", "L", "XL"], colors: ["#FFFFFF", "#FFF8F0", "#F5F5F5"] },

  // فساتين يومية (10)
  { id: 41, name: "فستان يومي كلاسيك", category: "فساتين يومية", categoryEn: "daily", price: 950, oldPrice: 1200, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.5, reviews: 45, badge: null, description: "فستان يومي مريح وعصري", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#F5F5DC", "#DEB887", "#87CEEB"] },
  { id: 42, name: "فستان صيفي ملون", category: "فساتين يومية", categoryEn: "daily", price: 750, oldPrice: 900, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", rating: 4.4, reviews: 52, badge: null, description: "فستان صيفي ناعم بألوان زاهية", sizes: ["S", "M", "L", "XL"], colors: ["#FF6347", "#4169E1", "#32CD32"] },
  { id: 43, name: "فستان يومي رياضي", category: "فساتين يومية", categoryEn: "daily", price: 650, oldPrice: 800, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.3, reviews: 60, badge: null, description: "فستان يومي رياضي مريح", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#1a1a1a", "#808080", "#4169E1"] },
  { id: 44, name: "فستان يومي بيج", category: "فساتين يومية", categoryEn: "daily", price: 850, oldPrice: 1000, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", rating: 4.6, reviews: 38, badge: null, description: "فستان يومي بيج أنيق", sizes: ["S", "M", "L", "XL"], colors: ["#F5F5DC", "#DEB887", "#D2B48C"] },
  { id: 45, name: "فستان يومي أزرق", category: "فساتين يومية", categoryEn: "daily", price: 780, oldPrice: 950, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", rating: 4.4, reviews: 48, badge: null, description: "فستان يومي أزرق مريح", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#87CEEB", "#00BFFF", "#1E90FF"] },
  { id: 46, name: "فستان يومي وردي", category: "فساتين يومية", categoryEn: "daily", price: 720, oldPrice: 880, image: "https://images.unsplash.com/photo-1594549182468-8acd8e6a6d3a?w=600", rating: 4.5, reviews: 42, badge: null, description: "فستان يومي وردي حلو", sizes: ["S", "M", "L", "XL"], colors: ["#FFB6C1", "#FFC0CB", "#FF69B4"] },
  { id: 47, name: "فستان يومي أخضر", category: "فساتين يومية", categoryEn: "daily", price: 690, oldPrice: 850, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600", rating: 4.3, reviews: 55, badge: null, description: "فستان يومي أخضر منعش", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#90EE90", "#32CD32", "#228B22"] },
  { id: 48, name: "فستان يومي رمادي", category: "فساتين يومية", categoryEn: "daily", price: 820, oldPrice: 1000, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", rating: 4.4, reviews: 36, badge: null, description: "فستان يومي رمادي عصري", sizes: ["S", "M", "L", "XL"], colors: ["#808080", "#A9A9A9", "#D3D3D3"] },
  { id: 49, name: "فستان يومي ألوان", category: "فساتين يومية", categoryEn: "daily", price: 680, oldPrice: 820, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", rating: 4.6, reviews: 44, badge: "ملون", description: "فستان يومي ملون مشرق", sizes: ["XS", "S", "M", "L"], colors: ["#FF6347", "#FFD700", "#40E0D0"] },
  { id: 50, name: "فستان يومي أسود", category: "فساتين يومية", categoryEn: "daily", price: 880, oldPrice: 1100, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", rating: 4.7, reviews: 35, badge: null, description: "فستان يومي أسود كلاسيكي", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#1a1a1a", "#2F4F4F", "#696969"] }
];

// متغيرات عامة
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// ========================================
// دوال مساعدة - toast محسنة
// ========================================

function showToast(message, type = 'success', title = '') {
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const titles = { success: 'نجاح', error: 'خطأ', info: 'معلومة' };
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type]}</div>
    <div class="toast-message">
      <div class="toast-title">${title || titles[type]}</div>
      <div class="toast-desc">${message}</div>
    </div>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function updateCartCount() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  // تحديث الإجمالي مباشرة عند تغيير السلة
  if (document.getElementById('cart-total')) {
    renderCart();
  }
}

function formatPrice(price) {
  return price.toLocaleString('ar-EG') + ' ج.م';
}

// ========================================
// إدارة السلة
// ========================================

function addToCart(productId, size, color) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // التحقق من وجود المنتج نفس المقاس واللون
  const existingItem = cart.find(item => 
    item.id === productId && 
    item.selectedSize === (size || product.sizes[0]) && 
    item.selectedColor === (color || product.colors[0])
  );
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      cartId: Date.now(),
      selectedSize: size || product.sizes[0],
      selectedColor: color || product.colors[0],
      quantity: 1
    });
  }
  
  saveCart();
  showToast(`تمت إضافة "${product.name}" للسلة`, 'success', 'تمت الإضافة');
}

function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  saveCart();
  renderCart();
  showToast('تمت إزالة المنتج من السلة', 'info');
}

function updateQuantity(cartId, change) {
  const item = cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      removeFromCart(cartId);
      return;
    }
    saveCart();
    renderCart();
  }
}

function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('تمت إزالة المنتج من المفضلة', 'info');
  } else {
    wishlist.push(productId);
    showToast('تمت إضافة المنتج للمفضلة', 'success');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  const btn = document.querySelector(`[data-wishlist="${productId}"]`);
  if (btn) {
    btn.innerHTML = wishlist.includes(productId) ? '❤️' : '🤍';
  }
}

// ========================================
// عرض المنتجات
// ========================================

function renderProducts(productList, container) {
  if (!container) return;
  
  container.innerHTML = productList.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <div class="product-actions">
          <button class="product-action" onclick="toggleWishlist(${product.id})" data-wishlist="${product.id}" title="إضافة للمفضلة">${wishlist.includes(product.id) ? '❤️' : '🤍'}</button>
          <button class="product-action" onclick="quickView(${product.id})" title="عرض سريع">👁️</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <a href="product.html?id=${product.id}" class="product-title">${product.name}</a>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <div class="product-rating">${renderStars(product.rating)}<span class="rating-count">(${product.reviews})</span></div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < fullStars; i++) { stars += '<span class="star">★</span>'; }
  if (hasHalf) { stars += '<span class="star">★</span>'; }
  return stars;
}

// ========================================
// عرض السلة - مع تحديث مباشر للإجمالي
// ========================================

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  const subtotalEl = document.getElementById('cart-subtotal');
  
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart" style="text-align: center; padding: 60px 20px;"><div style="font-size: 4rem; margin-bottom: 20px;">🛒</div><h3 style="color: var(--secondary); margin-bottom: 12px;">السلة فارغة</h3><p style="color: var(--text-light); margin-bottom: 24px;">لم تقم بإضافة أي منتجات بعد</p><a href="shop.html" class="btn btn-primary">تصفح المنتجات</a></div>`;
    if (totalEl) totalEl.textContent = '0 ₽';
    if (countEl) countEl.textContent = '0';
    if (subtotalEl) subtotalEl.textContent = '0 ₽';
    return;
  }
  
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>المقاس: ${item.selectedSize} | اللون: <span style="display: inline-block; width: 16px; height: 16px; background: ${item.selectedColor}; border-radius: 50%; vertical-align: middle;"></span></p>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.cartId}, -1)">−</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.cartId}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-actions">
        <button class="remove-btn" onclick="removeFromCart(${item.cartId})">حذف</button>
      </div>
    </div>
  `).join('');
  
  const total = calculateTotal();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (totalEl) totalEl.textContent = formatPrice(total);
  if (countEl) countEl.textContent = count;
  if (subtotalEl) subtotalEl.textContent = formatPrice(total);
}

// ========================================
// صفحة تفاصيل المنتج - Interactive Gallery
// ========================================

function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = products.find(p => p.id === productId);
  if (!product) { window.location.href = 'shop.html'; return; }
  
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-price').textContent = formatPrice(product.price);
  document.getElementById('product-old-price').textContent = formatPrice(product.oldPrice);
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('main-image').src = product.image;
  
  const sizeContainer = document.getElementById('size-options');
  sizeContainer.innerHTML = product.sizes.map(size => `<button class="size-btn" data-size="${size}">${size}</button>`).join('');
  
  const colorContainer = document.getElementById('color-options');
  colorContainer.innerHTML = product.colors.map(color => `<button class="color-btn" data-color="${color}" style="background: ${color}"></button>`).join('');
  
  const galleryContainer = document.getElementById('gallery-thumbs');
  galleryContainer.innerHTML = product.colors.map((color, index) => `
    <div class="thumb ${index === 0 ? 'active' : ''}" onclick="changeImage('${product.image}', this)">
      <img src="${product.image}" alt="${product.name}">
    </div>
  `).join('');
  
  setupProductEvents(product);
}

function setupProductEvents(product) {
  // اختيار المقاس
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // اختيار اللون
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // إضافة للسلة
  const addBtn = document.getElementById('add-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      const selectedSize = document.querySelector('.size-btn.active')?.dataset.size || product.sizes[0];
      const selectedColor = document.querySelector('.color-btn.active')?.dataset.color || product.colors[0];
      const quantity = parseInt(document.getElementById('quantity')?.value) || 1;
      addToCart(product.id, selectedSize, selectedColor);
    });
  }
  
  // quantity buttons
  const decreaseBtn = document.getElementById('decrease-qty');
  const increaseBtn = document.getElementById('increase-qty');
  const quantityInput = document.getElementById('quantity');
  
  if (decreaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', function() {
      if (quantityInput.value > 1) quantityInput.value = parseInt(quantityInput.value) - 1;
    });
  }
  
  if (increaseBtn && quantityInput) {
    increaseBtn.addEventListener('click', function() {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    });
  }
  
  // تحديد الأول
  document.querySelector('.size-btn')?.classList.add('active');
  document.querySelector('.color-btn')?.classList.add('active');
}

function changeImage(src, thumb) {
  document.getElementById('main-image').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ========================================
// نظام تسجيل الدخول
// ========================================

function handleLogin(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = { name: user.name, email: user.email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showToast('تم تسجيل الدخول بنجاح', 'success', 'مرحباً!');
    setTimeout(() => window.location.href = 'index.html', 1500);
    return true;
  }
  
  showToast('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
  return false;
}

function handleRegister(name, email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.find(u => u.email === email)) {
    showToast('البريد الإلكتروني مسجل بالفعل', 'error');
    return false;
  }
  
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  showToast('تم إنشاء حسابك بنجاح!', 'success', 'أهلاً بك');
  setTimeout(() => { document.querySelector('[data-tab="login"]')?.click(); }, 1500);
  return true;
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  showToast('تم تسجيل الخروج', 'info');
  window.location.reload();
}

// ========================================
// نموذج الاتصال
// ========================================

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;
  
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push({ name, email, message, date: new Date().toISOString() });
  localStorage.setItem('contacts', JSON.stringify(contacts));
  
  showToast('تم إرسال رسالتك بنجاح!', 'success');
  form.reset();
}

// ========================================
// نموذج الدفع - مع Steps والتحقق
// ========================================

function handleCheckout(event) {
  event.preventDefault();
  
  // التحقق من تسجيل الدخول
  if (!currentUser) {
    showToast('يرجى تسجيل الدخول أولاً', 'error');
    window.location.href = 'login.html';
    return;
  }
  
  if (cart.length === 0) {
    showToast('السلة فارغة', 'error');
    return;
  }
  
  // التحقق من صحة البيانات
  const form = event.target;
  const firstName = form.querySelector('[name="firstName"]')?.value;
  const phone = form.querySelector('[name="phone"]')?.value;
  const email = form.querySelector('[name="email"]')?.value;
  
  if (!firstName || !phone || !email) {
    showToast('يرجى ملء جميع الحقول المطلوبة', 'error');
    return;
  }
  
  const order = {
    id: 'ORD-' + Date.now(),
    customer: currentUser,
    items: [...cart],
    total: calculateTotal(),
    payment: form.querySelector('[name="payment"]')?.value || 'card',
    date: new Date().toISOString(),
    status: 'pending'
  };
  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  cart = [];
  saveCart();
  
  showToast(`تم تقديم طلبك بنجاح! رقم: ${order.id}`, 'success', 'شكراً لك');
  setTimeout(() => window.location.href = 'index.html', 2000);
}

// ========================================
// التحقق من النماذج
// ========================================

function validateField(input) {
  const value = input.value.trim();
  let isValid = true;
  let message = '';
  
  if (input.hasAttribute('required') && !value) {
    isValid = false;
    message = 'هذا الحقل مطلوب';
  } else if (input.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      message = 'بريد إلكتروني غير صالح';
    }
  } else if (input.type === 'tel' && value) {
    const phoneRegex = /^05\d{8}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      message = 'رقم هاتف غير صالح';
    }
  }
  
  if (isValid) {
    input.classList.remove('error');
    input.classList.add('success');
  } else {
    input.classList.remove('success');
    input.classList.add('error');
  }
  
  return isValid;
}

// ========================================
// تأثيرات التمرير والهيدر
// ========================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('animated'); }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
  });
  
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('active'));
  }
}

// ========================================
// المؤقت للعروض
// ========================================

function initTimer() {
  const timerEl = document.getElementById('timer');
  if (!timerEl) return;
  
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  
  function updateTimer() {
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
      timerEl.innerHTML = 'انتهى العرض!';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ========================================
// تصفية المنتجات - 10 في الصفحة
// ========================================

function filterProducts(category, page = 1) {
  let filtered = products;
  if (category && category !== 'all') {
    filtered = products.filter(p => p.categoryEn === category);
  }
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageProducts = filtered.slice(start, end);
  
  const container = document.getElementById('products-grid');
  if (container) { renderProducts(pageProducts, container); }
  renderPagination(page, totalPages, category);
}

function renderPagination(current, total, category) {
  const container = document.getElementById('pagination');
  if (!container) return;
  
  let html = '';
  if (current > 1) {
    html += `<button class="page-btn" onclick="filterProducts('${category || 'all'}', ${current - 1})">‹</button>`;
  }
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === current ? 'active' : ''}" onclick="filterProducts('${category || 'all'}', ${i})">${i}</button>`;
  }
  if (current < total) {
    html += `<button class="page-btn" onclick="filterProducts('${category || 'all'}', ${current + 1})">›</button>`;
  }
  container.innerHTML = html;
}

// ========================================
// عرض سريع
// ========================================

function quickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;
  
  document.getElementById('quick-product-name').textContent = product.name;
  document.getElementById('quick-product-price').textContent = formatPrice(product.price);
  document.getElementById('quick-product-desc').textContent = product.description;
  document.getElementById('quick-product-image').src = product.image;
  
  modal.classList.add('active');
  
  const addBtn = document.getElementById('quick-add-to-cart');
  if (addBtn) {
    addBtn.onclick = function() {
      addToCart(product.id);
      modal.classList.remove('active');
    };
  }
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

// ========================================
// التحقق من تسجيل الدخول
// ========================================

function checkAuth() {
  const authElements = document.querySelectorAll('[data-auth]');
  const userElements = document.querySelectorAll('[data-user]');
  
  if (currentUser) {
    authElements.forEach(el => el.style.display = 'none');
    userElements.forEach(el => {
      el.style.display = 'block';
      const nameEl = el.querySelector('.user-name');
      if (nameEl) nameEl.textContent = currentUser.name;
    });
  } else {
    authElements.forEach(el => el.style.display = 'block');
    userElements.forEach(el => el.style.display = 'none');
  }
}

// ========================================
// Checkout Steps
// ========================================

function initCheckoutSteps() {
  const steps = document.querySelectorAll('.checkout-step');
  if (steps.length === 0) return;
  
  let currentStep = 1;
  
  function showStep(step) {
    steps.forEach((s, index) => {
      s.classList.remove('active', 'completed');
      if (index + 1 < step) s.classList.add('completed');
      if (index + 1 === step) s.classList.add('active');
    });
  }
  
  // التحقق من الخطوة الحالية
  const form = document.querySelector('.checkout-form');
  if (form) {
    form.addEventListener('input', function() {
      // التحقق من ملء الحقول
      const required = form.querySelectorAll('[required]');
      let filled = 0;
      required.forEach(input => {
        if (input.value.trim()) filled++;
      });
      
      // تحديث الخطوة بناءً على الحقول المملوءة
      if (filled >= 3) currentStep = 2;
      if (filled >= 6) currentStep = 3;
      
      showStep(currentStep);
    });
  }
}

// ========================================
//初始化
// ========================================

// Dark Mode - الوضع الداكن
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  showToast(newTheme === 'dark' ? 'تم تفعيل الوضع الداكن' : 'تم تفعيل الوضع الفاتح', 'info');
}

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initTheme();
  updateCartCount();
  checkAuth();
  initScrollAnimations();
  initTimer();
  initCheckoutSteps();
  
  // إغلاق النافذة المنبثقة عند النقر خارجها
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  });
  
  // Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
  
  // التحقق من النماذج
  document.querySelectorAll('.form-input[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => validateField(input));
  });
});
