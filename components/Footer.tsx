'use client'

export default function Footer() {
	return (
	  <footer className="bg-gray-100 text-sm text-center mt-12 py-6">
	    <div className="max-w-5xl mx-auto px-4">
	      <p>Contact us at: <a href="mailto:wake@asu.edu" className="text-blue-500">asuwakedevils@gmail.com</a></p>
	      <div className="flex justify-center gap-4 mt-2">
		<a href="https://instagram.com/wakedevils" target="_blank" rel="noopener noreferrer">Instagram</a>
		<a href="https://tiktok.com/@wakedevils" target="_blank" rel="noopener noreferrer">Tiktok</a>
		<a href="https://www.youtube.com/channel/UCs1d49zxe1kYA2w43Ih7fSQ/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
	      </div>
	      <p className="mt-2 text-gray-500">&copy; {new Date().getFullYear()} ASU Wake Devils</p>
	    </div>
	  </footer>
	)
      }