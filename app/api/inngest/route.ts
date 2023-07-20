import inngest, { oyasumi, ohayou } from '@/lib/inngest'
import { serve } from 'inngest/next'

export const { GET, POST, PUT } = serve(inngest, [oyasumi, ohayou])
