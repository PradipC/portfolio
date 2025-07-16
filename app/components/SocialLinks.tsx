// Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full mt-10 text-center text-sm text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-700">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/PradipC"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 py-2 hover:text-blue-600 dark:hover:text-[#5c87f6] transition-all duration-300 text-gray-600 dark:text-gray-400"
        >
          <span className="font-medium text-sm">{'{ Github }'}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pradip-choudhari"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 py-2 hover:text-blue-600 dark:hover:text-[#5c87f6] transition-all duration-300 text-gray-600 dark:text-gray-400"
        >
          <span className="font-medium text-sm">[ Linkedin ]</span>
        </a>
        <a
          href="https://www.instagram.com/pradip_hc"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 py-2 hover:text-blue-600 dark:hover:text-[#5c87f6] transition-all duration-300 text-gray-600 dark:text-gray-400"
        >
          <span className="font-medium text-sm">&lt; Instagram /&gt;</span>
        </a>
      </div>

      {/* Footer text */}
      <p className="mt-4">
        Made with <span className="text-red-500">❤️</span> by <strong>Pradip Choudhari</strong> • © 2025
      </p>

      <p className="mt-4 text-xs font-mono">
        System.out.println(&quot;Thanks for visiting my portfolio!&quot;);
      </p>

    </footer>
  );
}
