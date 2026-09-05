import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Plus, Star, Trash2, Edit3, X, LogIn, 
  UserPlus, Moon, Sun, Tag, Clock, Leaf, LogOut, Check
} from 'lucide-react';

const MOCK_NOTES = [
  {
    id: '1',
    title: 'Ý tưởng thiết kế Logo mới',
    content: 'Sử dụng tone màu #pastel sáng kết hợp với nét vẽ tự do. Cần tập trung vào sự tối giản và thanh lịch. Nhớ check lại feedback của khách hàng vào thứ 3.\n\n#design #logo #freelance',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    isPinned: true,
  },
  {
    id: '2',
    title: 'Danh sách đồ cần mua',
    content: '- Sữa hạt\n- Bánh mì nguyên cám\n- Cà phê rang xay\n- Trái cây tươi (Cam, Táo)\n\n#shopping #weekend',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    isPinned: false,
  },
  {
    id: '3',
    title: 'Cuộc họp Dự án Xanh',
    content: 'Thống nhất lại quy trình làm việc với team Dev. \n1. Chốt design system\n2. Bàn giao assets\n3. Review tiến độ hàng tuần.\n\n#meeting #work',
    createdAt: new Date().toISOString(),
    isPinned: true,
  }
];

// Hàm hỗ trợ trích xuất hashtag từ nội dung văn bản (Hỗ trợ tiếng Việt)
const extractTags = (text) => {
  if (!text) return [];
  const regex = /#[\w\u00C0-\u1EF9]+/g;
  const tags = text.match(regex);
  return tags ? [...new Set(tags)] : [];
};

// Hàm format ngày tháng theo chuẩn Việt Nam
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
};

const AuthScreen = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Giả lập đăng nhập thành công
      onLogin({ email, name: email.split('@')[0] });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 dark:bg-slate-900 p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl w-full max-w-md border border-emerald-100 dark:border-emerald-900/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-200/50 dark:bg-emerald-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-green-200/50 dark:bg-green-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-4 text-white">
            <Leaf size={32} />
          </div>
          <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50 tracking-tight">Ghi Chú Xanh</h1>
          <p className="text-emerald-600/80 dark:text-emerald-400/80 mt-2 text-sm font-medium">
            Nơi lưu giữ ý tưởng của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 text-slate-800 dark:text-slate-100 transition-all"
              placeholder="ten@vidu.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mật khẩu</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 text-slate-800 dark:text-slate-100 transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 dark:shadow-none transition-all flex items-center justify-center gap-2"
          >
            {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
            {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
          </button>
        </form>

        <div className="mt-6 text-center relative z-10">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium transition-colors"
          >
            {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
};

const NoteEditor = ({ note, onSave, onClose, isDarkMode }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;
    onSave({
      id: note?.id || Date.now().toString(),
      title,
      content,
      createdAt: note?.createdAt || new Date().toISOString(),
      isPinned: note?.isPinned || false,
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 dark:bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className={`w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] border border-emerald-100 dark:border-emerald-900/50 overflow-hidden transform transition-all`}>
        
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700/50 bg-emerald-50/50 dark:bg-slate-800/80">
          <input
            type="text"
            placeholder="Tiêu đề ghi chú..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 bg-transparent text-xl font-bold text-slate-800 dark:text-emerald-50 focus:outline-none placeholder-slate-400 dark:placeholder-slate-500"
          />
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body Modal */}
        <div className="flex-1 overflow-y-auto p-6">
          <textarea
            placeholder="Viết nội dung của bạn ở đây... (Thêm #tag để phân loại)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[300px] bg-transparent text-slate-700 dark:text-slate-300 resize-none focus:outline-none leading-relaxed"
          />
        </div>

        {/* Footer Modal */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Clock size={16} />
            {note ? formatDate(note.createdAt) : 'Đang tạo mới...'}
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Hủy
            </button>
            <button 
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-200 dark:shadow-none transition-all flex items-center gap-2"
            >
              <Check size={18} />
              Lưu ghi chú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NoteCard = ({ note, onEdit, onDelete, onTogglePin }) => {
  const tags = extractTags(note.content);

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-50 dark:border-emerald-900/30 flex flex-col h-full relative overflow-hidden">
      
      {/* Nút tác vụ (Hiện khi hover) */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
        <button 
          onClick={(e) => { e.stopPropagation(); onTogglePin(note.id); }}
          className={`p-2 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors ${note.isPinned ? 'text-amber-500' : 'text-slate-400 dark:text-slate-500'}`}
          title={note.isPinned ? "Bỏ ghim" : "Ghim"}
        >
          <Star size={16} fill={note.isPinned ? "currentColor" : "none"} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(note); }}
          className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-500 transition-colors"
          title="Sửa"
        >
          <Edit3 size={16} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}
          className="p-2 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-500 transition-colors"
          title="Xóa"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div onClick={() => onEdit(note)} className="cursor-pointer flex-1 flex flex-col">
        {note.isPinned && (
          <div className="mb-2 text-amber-500 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
            <Star size={12} fill="currentColor" /> Đã ghim
          </div>
        )}
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-emerald-50 mb-3 line-clamp-2">
          {note.title || "Ghi chú không tên"}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-5 flex-1 whitespace-pre-wrap">
          {note.content}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50 flex flex-col gap-3">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Clock size={12} />
            {formatDate(note.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

const MainApp = ({ user, onLogout }) => {
  const [notes, setNotes] = useState(MOCK_NOTES);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Lọc và sắp xếp ghi chú (Ghim lên đầu, mới nhất xếp trước, lọc theo từ khóa)
  const filteredNotes = useMemo(() => {
    let filtered = notes;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = notes.filter(note => 
        (note.title?.toLowerCase().includes(query)) ||
        (note.content?.toLowerCase().includes(query)) ||
        (extractTags(note.content).some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    return filtered.sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [notes, searchQuery]);

  // Các thao tác CRUD
  const handleSaveNote = (savedNote) => {
    const existingIndex = notes.findIndex(n => n.id === savedNote.id);
    if (existingIndex >= 0) {
      const newNotes = [...notes];
      newNotes[existingIndex] = savedNote;
      setNotes(newNotes);
    } else {
      setNotes([savedNote, ...notes]);
    }
    setIsEditorOpen(false);
    setEditingNote(null);
  };

  const handleDeleteNote = (id) => {
    // Thay vì dùng confirm() (bị cấm), ta xóa thẳng luôn vì đây là bản prototype, 
    // có thể thêm tính năng "Thùng rác" sau này.
    setNotes(notes.filter(n => n.id !== id));
  };

  const handleTogglePin = (id) => {
    setNotes(notes.map(n => 
      n.id === id ? { ...n, isPinned: !n.isPinned } : n
    ));
  };

  const openEditor = (note = null) => {
    setEditingNote(note);
    setIsEditorOpen(true);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300`}>
      
      {/* Thanh Header Điều hướng */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center text-white shadow-md">
              <Leaf size={24} />
            </div>
            <h1 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50 hidden sm:block">
              Ghi Chú Xanh
            </h1>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="w-full sm:max-w-md relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Tìm theo từ khóa hoặc #tag (VD: #design)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-400 text-sm transition-shadow dark:text-slate-200 placeholder-slate-500"
            />
          </div>

          {/* Công cụ người dùng */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Chuyển chế độ giao diện"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
              <span className="text-sm font-medium">Chào, {user.name}</span>
            </div>
            <button 
              onClick={onLogout}
              className="p-2.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-full transition-colors"
              title="Đăng xuất"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Nội dung chính */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        
        {/* Tiêu đề phần & Nút thêm nhanh */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-emerald-100">
            {searchQuery ? 'Kết quả tìm kiếm' : 'Sổ tay của bạn'}
          </h2>
          <button 
            onClick={() => openEditor()}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold shadow-lg shadow-emerald-200 dark:shadow-none transition-all transform hover:scale-105"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Tạo mới</span>
          </button>
        </div>

        {/* Lưới hiển thị Ghi chú */}
        {filteredNotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-emerald-100 dark:bg-slate-800 flex items-center justify-center text-emerald-400 dark:text-emerald-600">
              <Leaf size={48} />
            </div>
            <h3 className="text-xl font-medium text-slate-600 dark:text-slate-400">
              Không tìm thấy ghi chú nào.
            </h3>
            <p className="text-slate-500 mt-2">
              Hãy tạo một ghi chú mới để lưu giữ những ý tưởng tuyệt vời.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNotes.map(note => (
              <NoteCard 
                key={note.id} 
                note={note} 
                onEdit={openEditor} 
                onDelete={handleDeleteNote}
                onTogglePin={handleTogglePin}
              />
            ))}
          </div>
        )}

      </main>

      {/* Nút FAB (Floating Action Button) cho Mobile */}
      <button 
        onClick={() => openEditor()}
        className="sm:hidden fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-600 transition-colors z-40"
      >
        <Plus size={28} />
      </button>

      {/* Cửa sổ Modal Editor */}
      {isEditorOpen && (
        <NoteEditor 
          note={editingNote} 
          onSave={handleSaveNote} 
          onClose={() => setIsEditorOpen(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  // Wrapper kiểm tra trạng thái đăng nhập
  if (!user) {
    return <AuthScreen onLogin={setUser} />;
  }

  return <MainApp user={user} onLogout={() => setUser(null)} />;
}