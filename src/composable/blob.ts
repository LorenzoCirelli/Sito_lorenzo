import { ref } from "vue"

export async function useUrlToBlob(img:string) {
    const data = ref('')
    await fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob)
        data.value = imageUrl
      })
      .catch(() => {
        console.error('Error getting blob for image')
        data.value = 'false'
      })
      return data.value;
    
}

