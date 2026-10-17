export default function AnalyzePage() {
  return (
    <main className="py-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Contract Analysis
        </h1>
        <p className="text-muted-foreground mb-6">
          Enter a contract address to analyze its bytecode, detect proxy patterns, and examine permission mechanisms.
        </p>
        <div className="bg-black/50 rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            Analysis will be performed on Base mainnet via viem.
          </p>
        </div>
      </div>
    </main>
  )
}