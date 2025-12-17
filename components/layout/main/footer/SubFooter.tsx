const SubFooter = () => {
  return (
    <div className="border-t border-gray-200 py-3">
      <div className="container text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ویجتیفای. تمامی حقوق محفوظ است.
        </p>
        <p className="mt-1 text-xs text-gray-400">ساخته شده با ❤️ در ایران</p>
      </div>
    </div>
  );
};

export default SubFooter;
