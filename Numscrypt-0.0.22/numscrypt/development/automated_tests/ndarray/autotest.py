import org.transcrypt.autotester

import basics
import a_linalg

autoTester = org.transcrypt.autotester.AutoTester ()

autoTester.run (basics, 'basics')
autoTester.run (a_linalg, 'a_linalg')

autoTester.done ()
