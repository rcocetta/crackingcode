def solution(X, A):
    counter = 0
    covered_positions = {}
    
    for idx, leaf in enumerate(A):
        if leaf not in covered_positions:
            covered_positions[leaf] = True
            counter +=1
        if counter >= X:
            return idx
    return -1