import {
  CopilotRuntime,
  AnthropicAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const copilotKit = new CopilotRuntime()

const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
  runtime: copilotKit,
  serviceAdapter: new AnthropicAdapter({ anthropic }),
  endpoint: '/api/copilotkit',
})

export const GET = async (req: Request) => {
  return handleRequest(req)
}
