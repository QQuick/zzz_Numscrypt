import org.transcrypt.autotester

import basics
import module_linalg
import module_fft

autoTester = org.transcrypt.autotester.AutoTester ()

autoTester.run (basics, 'basics')
autoTester.run (module_linalg, 'module_linalg')
autoTester.run (module_fft, 'module_fft')

autoTester.done ()
