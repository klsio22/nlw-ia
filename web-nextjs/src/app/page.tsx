import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Github, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='px-6 py-3 flex items-center justify-between border-b'>
        <h1>Video IA Transcriber</h1>

        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground flex items-center'>
            Desenvolvido com <Heart className='w-4 h-4 mx-2' color='red' /> no
            nlw da Rockeseat
          </span>
          <Button variant={"outline"}>
            <Github className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua o promt para a IA'
            ></Textarea>
            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Resultado gerado pela IA'
            ></Textarea>
          </div>

          <p className='text-sm text-muted-foreground'>
            Lembre-se: você pode utilizar a variável{" "}
            <code className='text-violet-400'>{"transcription"}</code> no seu
            prompt para adicionar o conteúdo de transcrição do vídeo selecionado
          </p>
        </div>

        <aside className='w-80'></aside>
      </main>
    </div>
  );
}
