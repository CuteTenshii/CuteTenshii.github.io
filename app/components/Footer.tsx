export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-4 mt-8 px-4">
      <p className="mb-2">
        Made with ❤️
      </p>
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tenshii. All rights reserved. Source code available on{' '}
        <a href="https://github.com/CuteTenshii/CuteTenshii.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </footer>
  );
}