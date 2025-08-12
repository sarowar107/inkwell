import { useState } from 'react';
import { UploadCloud, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const newPreviewUrl = URL.createObjectURL(file);
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setPreview(newPreviewUrl);
      setFileName(file.name);
    }
  };

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    setFileName(null);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-text-secondary mb-2">
        Cover Image
      </label>
      <div className="mt-2 flex justify-center items-center rounded-lg border-2 border-dashed border-border bg-surface relative min-h-[200px] p-2">
        <AnimatePresence mode="wait">
          {!preview ? (
            <motion.div
              key="upload-prompt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center p-4"
            >
              <UploadCloud className="mx-auto h-12 w-12 text-text-secondary" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-text-secondary">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background hover:text-secondary"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-text-secondary/70">PNG, JPG, GIF up to 10MB</p>
            </motion.div>
          ) : (
            <motion.div
              key="image-preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full h-full relative"
            >
              <img src={preview} alt="Image preview" className="mx-auto max-h-64 w-auto object-contain rounded-md" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 bg-surface/50 backdrop-blur-sm rounded-full p-1.5 text-text hover:text-white hover:bg-red-500/50 transition-all"
                aria-label="Remove image"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-2 left-2 bg-surface/50 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-text-secondary truncate max-w-[calc(100%-1rem)]">
                {fileName}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageUpload;
