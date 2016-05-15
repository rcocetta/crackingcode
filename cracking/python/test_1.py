import unittest
import chapter1

class Ex1_2(unittest.TestCase):
    def runTest(self):
        self.assertEqual(chapter1.reverse('abcd'), 'dcba')
        self.assertEqual(chapter1.reverse('a'),'a')
        self.assertEqual(chapter1.reverse(''), '')

def suite():
    t_suite = unittest.TestSuite()
    t_suite.addTest(unittest.makeSuite(Ex1_2))
    return t_suite

if __name__=='__main__':
    runner = unittest.TextTestRunner(verbosity=2)
    test_suite = suite()
    runner.run(test_suite)