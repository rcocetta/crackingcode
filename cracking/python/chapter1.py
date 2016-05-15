##
# Ex. 1.2 Write code to reverse a C-Style String.
# (C-String means that 'abcd' is represented as five characters, including the null character.)
#
def reverse(str):
    """
    Reverses a string. But in Python I have to create a new one or use string specific functions
    """
    j = len(str)-1
    rev = ''
    while (j >= 0):
        rev += str[j]
        j -= 1
    return rev