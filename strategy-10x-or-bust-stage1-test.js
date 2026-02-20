// ========================================
// 10x OR BUST - STAGE 1 TEST VERSION ($1 bets)
// ========================================
// Goal: Test bot functionality with minimal risk
// Budget: $5 total (5 sessions of $1)
// Win chance: 9.9% per session
// ⚠️ THIS IS FOR TESTING ONLY - NOT REAL STRATEGY
// ========================================

game = "limbo"
target = 10.00  // 10x multiplier
sessionBankroll = 1  // $1 per session (TEST AMOUNT)
nextbet = sessionBankroll  // All-in every session

// Session tracking
sessionNumber = 1
totalSessions = 5
totalCapital = 5  // Only $5 at risk

// Statistics
startTime = Date.now()
sessionStartTime = Date.now()

dobet = function() {
  if (win) {
    // SUCCESS!
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000
    let profit = nextbet * target - nextbet

    log("════════════════════════════════════════")
    log("✅ TEST WIN! Session " + sessionNumber + " SUCCESS!")
    log("════════════════════════════════════════")
    log("💰 Bet amount: $" + nextbet.toFixed(2))
    log("💰 Payout: $" + (nextbet * target).toFixed(2))
    log("💰 Profit: $" + profit.toFixed(2))
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("📊 Win on attempt: " + sessionNumber + " / " + totalSessions)
    log("")
    log("✅ BOT WORKS CORRECTLY!")
    log("🔄 Ready for Stage 2 testing with $5 sessions")
    log("════════════════════════════════════════")

    stop()

  } else {
    // LOSS
    let elapsedSeconds = (Date.now() - sessionStartTime) / 1000

    log("════════════════════════════════════════")
    log("❌ Session " + sessionNumber + " LOST (-$1)")
    log("⏱️  Time: " + elapsedSeconds.toFixed(1) + " seconds")
    log("════════════════════════════════════════")

    if (sessionNumber >= totalSessions) {
      // ALL 5 TEST SESSIONS EXHAUSTED
      let totalTime = (Date.now() - startTime) / 1000

      log("")
      log("🔚 TEST COMPLETE - ALL 5 SESSIONS RUN")
      log("════════════════════════════════════════")
      log("📊 Sessions attempted: " + totalSessions)
      log("📊 Sessions won: 0")
      log("📊 Sessions lost: " + totalSessions)
      log("💸 Total test loss: -$" + totalCapital.toFixed(2))
      log("⏱️  Total time: " + (totalTime / 60).toFixed(1) + " minutes")
      log("")
      log("⚠️ This is expected (5 losses = 59% probability)")
      log("✅ Bot executed correctly")
      log("🔄 Proceed to Stage 2 with $5 sessions")
      log("════════════════════════════════════════")

      stop()

    } else {
      // PREPARE NEXT TEST SESSION
      sessionNumber++
      let remaining = totalSessions - sessionNumber + 1
      let capitalRemaining = remaining * sessionBankroll

      log("")
      log("🔄 READY FOR TEST SESSION " + sessionNumber)
      log("════════════════════════════════════════")
      log("💪 Remaining test attempts: " + remaining)
      log("💵 Test capital remaining: $" + capitalRemaining.toFixed(2))
      log("")
      log("▶️  Click START to place next $1 test bet")
      log("════════════════════════════════════════")

      sessionStartTime = Date.now()  // Reset session timer
      stop()  // User must manually click Start for next session
    }
  }
}

// Display initial status
log("════════════════════════════════════════")
log("🧪 STAGE 1 TEST - 10x OR BUST")
log("════════════════════════════════════════")
log("⚠️  TEST MODE - $1 bets only")
log("💰 Bet per session: $" + sessionBankroll.toFixed(2))
log("🎯 Target multiplier: " + target.toFixed(2) + "x")
log("📊 Total test sessions: " + totalSessions)
log("📊 Total test capital: $" + totalCapital.toFixed(2))
log("")
log("🎯 Test objectives:")
log("✅ Verify bot places bets correctly")
log("✅ Verify win/loss detection works")
log("✅ Verify session tracking works")
log("✅ Verify logs display correctly")
log("")
log("▶️  Click START to begin Test Session 1")
log("════════════════════════════════════════")
