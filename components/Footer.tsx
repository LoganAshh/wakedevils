'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-center mt-12 py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-3">
        <p>
          Contact us at:{' '}
          <a
            href="mailto:asuwakedevils@gmail.com"
            className="text-blue-600 hover:underline"
          >
            asuwakedevils@gmail.com
          </a>
        </p>

        <div className="flex flex-row gap-4 justify-center items-center">
          <a
            href="https://instagram.com/wakedevils"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#943728] transition"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@wakedevils"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#943728] transition"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/channel/UCs1d49zxe1kYA2w43Ih7fSQ/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#943728] transition"
          >
            YouTube
          </a>
        </div>

        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} ASU Wake Devils
        </p>
      </div>
    </footer>
  )
}